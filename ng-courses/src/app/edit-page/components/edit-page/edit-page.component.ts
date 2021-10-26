import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
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

  public courseAuthors = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
  ) {  }

  ngOnInit(): void {
    console.log('***', this.activatedRoute.data);
    this.activatedRoute.data.subscribe((data) => {
      console.log('!', data)
      this.selectedCourse = data.course
    })
  }

  public onSave() {
    this.coursesService.updateCourse(this.selectedCourse);
    this.router.navigate(['courses']);
  }

}
