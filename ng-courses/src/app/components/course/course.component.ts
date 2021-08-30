import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/interfaces/icourse';
import { COURSES } from 'src/mock-data';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses = COURSES;

  // public course: ICourse = {
  //   id: 1,
  //   title: 'Course 1',
  //   creationDate: '01.09.2021',
  //   duration: 120,
  //   description: 'course description ...',
  // }

  // public id = 1;

  // public title = 'Test 1';

  // public creationDate = '01.09.2021';

  // public duration = 120;

  // public description = 'new course';

  constructor() {

  }

  ngOnInit(): void {

  }

}
