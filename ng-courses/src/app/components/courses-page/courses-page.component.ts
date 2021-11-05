import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, AfterViewInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ICourse } from './../../model/interfaces/icourse';
import { ModalWindowComponent, testAnimation } from '../modal-window/modal-window.component';
import { FilterCoursesPipe } from 'src/app/shared/pipes/filter-courses.pipe';
import { Observable, of, Subject, Subscribable } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, distinctUntilKeyChanged, filter, map, merge, switchMap, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

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

  public searchTermSubj = new Subject<string>();

  constructor(
    public coursesService: CoursesService,
    private loadingService: LoadingService
  ) {  }

  ngOnInit(): void {
    this.coursesService.getCoursesList().subscribe(response => this.courses = response);
  }

  ngAfterViewInit() {
    console.log("modalWindow:", this.modalWindow?.testMethod());
  }

  // onSearchClick() {
  //   if (this.searchField === '') {
  //     this.coursesService.resetCounter();
  //     this.coursesService.getCoursesList().subscribe(response => this.courses = response);
  //     this.showLoadMoreBtn();
  //   } else {
  //     this.coursesService.searchCourse(this.searchField).subscribe(response => this.courses = response)
  //     this.hideLoadMoreBtn();
  //   }
  // }

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
    console.log('show load more started')
    this.loadMoreBtnIsShown = true;
  }

  public onChangeSearchField() {
    this.searchTermSubj.next(this.searchField);
    this.searchTermSubj.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter((search: string) => (search.length >= 3) || (search === '')),
      switchMap((searchResult: string): Observable<ICourse[]> => {
        if (this.searchField === '') {
          console.log('1');
          this.coursesService.resetCounter();
          this.showLoadMoreBtn();
          return this.coursesService.getCoursesList();
        } else {
          console.log('2');
          this.hideLoadMoreBtn();
          return this.coursesService.searchCourse(searchResult)
        }
      }),
    ).subscribe((data) => this.courses = data)
  }

}
