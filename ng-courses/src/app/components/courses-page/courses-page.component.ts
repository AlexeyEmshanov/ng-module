import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterCoursesPipe } from 'src/app/pipes/filter-courses.pipe';
import { CoursesService } from 'src/app/services/courses.service';
import { ModalService } from 'src/app/services/modal.service';
import { ICourse } from './../../model/interfaces/icourse';
import { testAnimation } from '../modal-window/modal-window.component';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [ FilterCoursesPipe ],
  animations: [ testAnimation ],
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = [];

  public searchField: string = '';

  public idCourseToRemove: number = 0;

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

  onAcceptDelete(idToDelete: number): void {
    this.courses = this.coursesService.removeCourse(idToDelete);
    this.courses = this.coursesService.getCoursesList();
    this.modalServise.hideModalWindow();
  }

  getIsEmpty() {
    return this.courses.length === 0
  }

  onDeleteCourse(id: number) {
    this.idCourseToRemove = id;
  }

}
