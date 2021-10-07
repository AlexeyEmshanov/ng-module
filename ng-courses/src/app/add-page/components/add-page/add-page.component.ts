import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { NewCourse } from '../../models/newCourse';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent {
  public newCourseTitle?: string;
  public newCourseDescription?: string;
  public newCourseDate = new Date();
  public newCourseDuration?: number;
  public newCourseAuthors?: string;

  constructor() { }

  // ngOnInit(): void {
  // }

  public createCourse() {
    if ((this.newCourseTitle) && (this.newCourseDescription) && (this.newCourseDuration)) {
      const newCourse = new NewCourse(
        this.newCourseTitle,
        this.newCourseDescription,
        this.newCourseDate,
        this.newCourseDuration
      );

      console.log(newCourse);
    }
  }
}
