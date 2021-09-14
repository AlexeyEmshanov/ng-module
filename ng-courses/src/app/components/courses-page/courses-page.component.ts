import { ThrowStmt } from '@angular/compiler';
import { Component, DoCheck, Inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FilterCoursesPipe } from 'src/app/pipes/filter-courses.pipe';
import { CoursesService } from 'src/app/services/courses.service';
import { ICourse } from './../../model/interfaces/icourse';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [FilterCoursesPipe]
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = [];

  public searchField: string = '';

  public isEmpty?: boolean;

  constructor(
    public filterCoursesPipe: FilterCoursesPipe,
    public coursesService: CoursesService,
  ) {  }


  onSearchClick() {
    this.courses = this.coursesService.getCoursesList();
    this.courses = this.filterCoursesPipe.transform(this.courses, this.searchField);
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
    this.courses = this.coursesService.getCoursesList();
  }


  public getIsEmpty() {
    return this.courses.length === 0
  }

}
