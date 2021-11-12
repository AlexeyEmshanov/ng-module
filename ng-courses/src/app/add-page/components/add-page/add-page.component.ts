import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { update } from 'lodash';
import { Course } from 'src/app/model/course';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';
import { NewCourse } from '../../model/newCourse';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent {
  addCourseForm: FormGroup = new FormGroup(
    {
      titleCtrl: new FormControl('', [ Validators.required, Validators.maxLength(10) ],),
      descriptionCtrl: new FormControl('', [ Validators.required, Validators.maxLength(20) ]),
      dateCtrl: new FormControl(new Date(), [Validators.required]),
    },
    { updateOn: 'blur' }
  )


  // public newCourse = new Course(this.generateID(), '', '', false, new Date(), [], 0);

  constructor(private coursesService: CoursesService, private router: Router, private formBuilder: FormBuilder) { }

  // ngOnInit(): void {
  // }

  public generateID() {
    return Math.floor(Math.random() * 100) + 1
  }

  public generateCourse () {
    console.log('test 2', this.addCourseForm.get('date')?.value)
    const newCourse = new Course(
      this.generateID(),
      this.addCourseForm.get('title')?.value,
      this.addCourseForm.get('description')?.value,
      false,
      this.addCourseForm.get('date')?.value,
      [],
      50
      )

    return newCourse;
  }

  public onSubmit() {
    console.log('Submitting', this.addCourseForm.get('title')?.value, this.addCourseForm.get('description')?.value)
    console.log(this.addCourseForm.status, this.addCourseForm.dirty, this.addCourseForm.touched);
    this.coursesService.createCourse(this.generateCourse()).subscribe();
    this.router.navigate(['courses']);
  }
}
