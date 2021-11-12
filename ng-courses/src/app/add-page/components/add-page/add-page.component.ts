import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { update } from 'lodash';
import { Course } from 'src/app/model/course';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';
import { NewCourse } from '../../model/newCourse';
import * as moment from 'moment'

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent implements OnInit {
  addCourseForm: FormGroup = new FormGroup(
    {
      titleCtrl: new FormControl('', [ Validators.required, Validators.maxLength(10) ],),
      descriptionCtrl: new FormControl('', [ Validators.required, Validators.maxLength(20) ]),
      dateCtrl: new FormControl(new Date(), [] ),
    },
    { updateOn: 'change' }
  )

  constructor(private coursesService: CoursesService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addCourseForm.controls.dateCtrl.valueChanges.subscribe(data => {console.log('STATUS: ', this.addCourseForm.pristine)})
  }

  public generateID() {
    return Math.floor(Math.random() * 100) + 1
  }

  public generateCourse () {
    console.log('test 2', this.addCourseForm.get('dateCtrl')?.value)
    const newCourse = new Course(
      this.generateID(),
      this.addCourseForm.get('titleCtrl')?.value,
      this.addCourseForm.get('descriptionCtrl')?.value,
      false,
      this.addCourseForm.get('dateCtrl')?.value,
      [],
      50
      )

    return newCourse;
  }

  public onSubmit() {
    console.log('Submitting', this.addCourseForm.get('titleCtrl')?.value, this.addCourseForm.get('descriptionCtrl')?.value)
    console.log(this.addCourseForm.status, this.addCourseForm.dirty, this.addCourseForm.touched, this.addCourseForm.pristine);
    this.coursesService.createCourse(this.generateCourse()).subscribe();
    this.router.navigate(['courses']);
  }

  public fromAbsToControl(absCtrl: AbstractControl): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl as FormControl;
}
}
