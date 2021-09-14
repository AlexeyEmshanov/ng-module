import { ThrowStmt } from '@angular/compiler';
import { Component, DoCheck, Inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FilterCoursesPipe } from 'src/app/pipes/filter-courses.pipe';
import { CoursesService } from 'src/app/services/courses.service';
import { ICourse } from './../../model/interfaces/icourse';
import { COURSES } from './../../model/mock-data';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [FilterCoursesPipe]
})
export class CoursesPageComponent implements DoCheck, OnInit {
  public courses: ICourse[];

  public searchField: string = '';

  public isEmpty?: boolean;

  constructor(
    public filterCoursesPipe: FilterCoursesPipe,
    public coursesService: CoursesService,
  )
  {
    this.courses = coursesService.getCoursesList();
  }


  onSearchClick() {
    if (this.searchField === '') {
      this.courses = this.coursesService.getCoursesList();
    } else {
      this.courses = this.filterCoursesPipe.transform(this.courses, this.searchField);
    }
  }

  onAddCourseClick() {
    console.log('Add Course btn clicked!');
  }

  onLoadMoreClick() {
    console.log('Load more btn clicked!');
  }

  public onDeleteCourse(idToDelete: number): void {
    this.courses = this.coursesService.removeCourse(idToDelete);
  }

  ngOnInit(): void {
    // let test = 'test values in ngOnInit at courses page';
    // console.log('course-page ngOnInit!!!', test);
    this.courses = this.coursesService.getCoursesList();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('course-page ngOnChange!!!', changes);
  //   // console.log(this.isEmpty);
  //   // this.courseCounter = this.courses.length;
  //   // this.isEmpty = this.courses.length === 0;
  //   // this.courses = COURSES;
  // }

  ngDoCheck() {
    if (this.courses.length === 0) {
      this.isEmpty = true
    } else {
      this.isEmpty = false
    }
  }
}
