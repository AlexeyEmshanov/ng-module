import { Component, Input, OnInit } from '@angular/core';
import { ICourseDetail, } from 'src/app/course-details/model/ICourseDetail';
import { ICourse } from 'src/app/model/interfaces/icourse';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  @Input() public course: ICourseDetail = {
    title: '',
    description: '',
    courseDate: new Date(0),
    duration: 0,
    authors: ''
  };

  constructor() {

  }



}
