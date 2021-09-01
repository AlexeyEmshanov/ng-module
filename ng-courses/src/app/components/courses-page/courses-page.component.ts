import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {

  }

  onSearchClick() {
    console.log(this.searchField);
  }

  onAddCourseClick() {
    console.log('Add Course btn clicked!');
  }

  onLoadMoreClick() {
    console.log('Load more btn clicked!');
  }

  public deleteItem(idToDelete: number): void {
    this.courses = this.courses.filter((course: ICourse) => course.id !== idToDelete)
  }

}
