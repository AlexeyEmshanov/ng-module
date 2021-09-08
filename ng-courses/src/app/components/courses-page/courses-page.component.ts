import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ICourse } from './../../model/interfaces/icourse';
import { COURSES } from './../../model/mock-data';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = COURSES;

  public searchField: string = '';

  constructor() { }


  onSearchClick() {
    console.log(this.searchField);
  }

  onAddCourseClick() {
    console.log('Add Course btn clicked!');
  }

  onLoadMoreClick() {
    console.log('Load more btn clicked!');
  }

  public onDeleteCourse(idToDelete: number): void {
    this.courses = this.courses.filter((course: ICourse) => course.id !== idToDelete)
  }

  ngOnInit(): void {
    let test = 'test values in ngOnInit at courses page';
    console.log('course-page ngOnInit!!!', test);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('course-page ngOnChange!!!', changes)

  // }
}
