import { Component, DoCheck, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ICourse } from './../../model/interfaces/icourse';
import { COURSES } from './../../model/mock-data';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements DoCheck {
  public courses: ICourse[] = COURSES;

  public searchField: string = '';

  public isEmpty?: boolean;

  constructor() { }


  onSearchClick() {
    console.log(this.searchField);
    let x  = this.courses.filter(course => course.title.includes(this.searchField.toLocaleLowerCase()));
    console.log('!!', x, this.courses.filter(course => course.title === this.searchField));
    console.log(this.courses[0].title.includes('ourse'));
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

  // ngOnInit(): void {
  //   let test = 'test values in ngOnInit at courses page';
  //   console.log('course-page ngOnInit!!!', test);
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('course-page ngOnChange!!!', changes);
  //   console.log(this.isEmpty);
  //   this.courseCounter = this.courses.length;
  //   this.isEmpty = this.courses.length === 0;
  // }

  ngDoCheck() {
    if (this.courses.length === 0) {
      this.isEmpty = true
    } else {
      this.isEmpty = false
    }
  }
}
