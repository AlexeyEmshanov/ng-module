import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
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

  public loadMoreBtnIsShown = true;

  constructor(
    // public filterCoursesPipe: FilterCoursesPipe,
    public coursesService: CoursesService,
    public cd: ChangeDetectorRef
  ) {  }

  ngOnInit(): void {
    this.coursesService.getCoursesList().subscribe(response => this.courses = response);
  }

  ngAfterViewInit() {
    console.log("modalWindow:", this.modalWindow?.testMethod());
  }

  onSearchClick() {
    if (this.searchField === '') {
      this.coursesService.resetCounter();
      this.coursesService.getCoursesList().subscribe(response => this.courses = response);
      this.showLoadMoreBtn();
    } else {
      this.coursesService.searchCourse(this.searchField).subscribe(response => this.courses = response)
      this.hideLoadMoreBtn();
    }




    // this.coursesService.getCoursesList().subscribe(response => this.courses = response);
    // this.courses = this.filterCoursesPipe.transform(this.courses, this.searchField);
  }

  onAddCourseClick() {
    console.log('Add Course btn clicked!');
  }

  onLoadMoreClick() {
    console.log('Load more btn clicked!');
    this.coursesService.counterUp();
    this.coursesService.getCoursesList().subscribe(response => this.courses = response);
  }

  onAcceptDelete(idToRemove: number): void {
    this.courses = this.coursesService.removeCourse(idToRemove);
    this.coursesService.getCoursesList().subscribe(response => this.courses = response);
  }

  getIsEmpty() {
    return this.courses.length === 0
  }

  onDeleteCourse(clickedId: number) {
    this.modalWindow?.showModalWindow();
    this.idToRemove = clickedId;
  }

  hideLoadMoreBtn(): void {
    this.loadMoreBtnIsShown = false;
  }

  showLoadMoreBtn(): void {
    this.loadMoreBtnIsShown = true;
  }

}
