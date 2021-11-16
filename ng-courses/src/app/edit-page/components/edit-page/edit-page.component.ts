import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { IAuthor } from 'src/app/model/interfaces/iauthor';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public selectedCourse: ICourse = {
    id: 0,
    name: '',
    description: '',
    date: new Date(),
    length: 0,
    isTopRated: false,
    authors: [],
  }

  editCourseForm: FormGroup = new FormGroup(
    {
      titleCtrl: new FormControl(this.selectedCourse.name, [ Validators.required, Validators.maxLength(50) ],),
      descriptionCtrl: new FormControl(this.selectedCourse.description, [ Validators.required, Validators.maxLength(500) ]),
      dateCtrl: new FormControl(this.selectedCourse.date, [] ),
      durationCtrl: new FormControl(this.selectedCourse.length, [ Validators.required ] ),
      authorsCtrl: new FormControl()
    },
    { updateOn: 'change' }
  )

  public courseAuthors = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
  ) {  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.selectedCourse = data.course

      this.editCourseForm.setValue({
        titleCtrl: this.selectedCourse.name,
        descriptionCtrl: this.selectedCourse.description,
        dateCtrl: this.selectedCourse.date,
        durationCtrl: this.selectedCourse.length,
        authorsCtrl: this.getAuthors(),
      })
    })
  }

  public onSubmit() {
    const updatedCourse = {
      ...this.selectedCourse,
      date: this.editCourseForm.controls['dateCtrl'].value,
      length: this.editCourseForm.controls['durationCtrl'].value,
      authors: this.editCourseForm.controls['authorsCtrl'].value
    }

    this.coursesService.updateCourse(updatedCourse).subscribe();
    this.router.navigate(['courses']);
  }

  public fromAbsToControl(absCtrl: AbstractControl): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl as FormControl;
  }

  public getAuthors(): IAuthor[] {
    // const authorsArr: IAuthor[] = []
    // this.selectedCourse.authors.forEach(author => authorsArr.push(author.firstName + ' ' + author.lastName))
    return this.selectedCourse.authors;
  }
}
