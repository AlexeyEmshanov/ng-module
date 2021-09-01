import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/icourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem?: ICourse;

  constructor() { }

  ngOnInit(): void {

  }

}
