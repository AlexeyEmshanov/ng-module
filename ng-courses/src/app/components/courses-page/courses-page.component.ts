import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ModalService } from 'src/app/services/modal.service';
import { ICourse } from './../../model/interfaces/icourse';
import { ModalWindowComponent, testAnimation } from '../modal-window/modal-window.component';
import { FilterCoursesPipe } from 'src/app/shared/pipes/filter-courses.pipe';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit, AfterViewInit {

  @ViewChild(ModalWindowComponent) modalWindow?: ModalWindowComponent;

  public courses: ICourse[] = [];

  public searchField: string = '';

  public idToRemove: number = 0;

  constructor(
    public filterCoursesPipe: FilterCoursesPipe,
    public coursesService: CoursesService,
    // public modalServise: ModalService,
    public cd: ChangeDetectorRef
  ) {  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCoursesList();
  }

  ngAfterViewInit() {
    console.log("modalWindow:", this.modalWindow?.testMethod());
    // this.idToRemove = this.modalWindow?.idToDelete
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

  onAcceptDelete(idToRemove: number): void {
    this.courses = this.coursesService.removeCourse(idToRemove);
    this.courses = this.coursesService.getCoursesList();
  }

  getIsEmpty() {
    return this.courses.length === 0
  }

  onDeleteCourse(clickedId: number) {
    this.modalWindow?.showModalWindow();
    this.idToRemove = clickedId;
  }

}
