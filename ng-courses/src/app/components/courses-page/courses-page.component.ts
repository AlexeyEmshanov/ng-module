import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterCoursesPipe } from 'src/app/pipes/filter-courses.pipe';
import { CoursesService } from 'src/app/services/courses.service';
import { ModalService } from 'src/app/services/modal.service';
import { ICourse } from './../../model/interfaces/icourse';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [ FilterCoursesPipe ]
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = [];

  public searchField: string = '';

  public idCourseToRemove: number = 0;

  @Output() acceptDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public filterCoursesPipe: FilterCoursesPipe,
    public coursesService: CoursesService,
    public modalServise: ModalService
  ) {  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCoursesList();
  }

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
    console.log('event happend')
    this.courses = this.coursesService.removeCourse(idToDelete);
    this.courses = this.coursesService.getCoursesList();
    this.modalServise.hideModalWindow();
  }

  public getIsEmpty() {
    return this.courses.length === 0
  }

  saveId(id: number) {
    this.idCourseToRemove = id;
  }

}
