import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, AfterViewInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ICourse } from './../../model/interfaces/icourse';
import { ModalWindowComponent, testAnimation } from '../modal-window/modal-window.component';
import { FilterCoursesPipe } from 'src/app/shared/pipes/filter-courses.pipe';
import { Observable, of, Subscribable } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

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
    // public cd: ChangeDetectorRef
  ) {  }

  ngOnInit(): void {
    // this.courses = this.coursesService.getCoursesList()
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
  }

  onLoadMoreClick() {
    this.coursesService.counterUp();
    this.coursesService.getCoursesList().subscribe(response => this.courses = response);
  }

  onAcceptDelete(idToRemove: number): void {
    this.coursesService.removeCourse(idToRemove).subscribe(
      () => {
        this.coursesService.getCoursesList().subscribe(response => this.courses = response);
      }
    );
  }

  getIsEmpty() {
    return this.courses.length === 0
  }

  onDeleteCourse(clickedId: number) {
    console.log('delete');
    this.modalWindow?.showModalWindow();
    this.idToRemove = clickedId;
  }

  hideLoadMoreBtn(): void {
    this.loadMoreBtnIsShown = false;
  }

  showLoadMoreBtn(): void {
    this.loadMoreBtnIsShown = true;
  }

  // public searchObservable = new Observable<string>((subscriber) => {
  //   subscriber.next();
  // })


  public onChangeSearchField(searchFragment: string) {
    const searchObservable = of(searchFragment)


    searchObservable.pipe(
      filter(search => search.length >= 3)
    ).subscribe((search) => {


      console.log(search);
      this.coursesService.searchCourse(searchFragment)

      .subscribe(response => this.courses = response);
    })


    // this.searchObservable.subscribe(() => {
    //   console.log(searchFragment);
    //   this.coursesService.searchCourse(searchFragment).subscribe(response => this.courses = response);
    // })
  }

}
