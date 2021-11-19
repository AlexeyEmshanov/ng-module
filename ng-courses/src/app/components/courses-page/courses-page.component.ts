import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, AfterViewInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ICourse } from './../../model/interfaces/icourse';
import { ModalWindowComponent, testAnimation } from '../modal-window/modal-window.component';
import { FilterCoursesPipe } from 'src/app/shared/pipes/filter-courses.pipe';
import { BehaviorSubject, Observable, of, Subject, Subscribable } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, distinctUntilKeyChanged, filter, map, merge, switchMap, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';
import { FormControl } from '@angular/forms';
import { CoreStoreModule } from 'src/app/core/+store/core-store.module';
import { Store } from '@ngrx/store';
import * as UsersActions from './../../core/+store/users/users.actions'


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit, AfterViewInit {

  @ViewChild(ModalWindowComponent) modalWindow?: ModalWindowComponent;

  public courses$: Observable<ICourse[]> = of([]);

  public searchForm = new FormControl('')

  public idToRemove: number = 0;

  public loadMoreBtnIsShown = true;

  public searchTermSubj = new BehaviorSubject('');

  constructor(
    public coursesService: CoursesService,
    private store: Store,
  ) {  }

  ngOnInit(): void {
    this.courses$ = this.searchTermSubj.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter((search: string) => (search.length >= 3) || (search === '')),
      switchMap((searchResult: string): Observable<ICourse[]> => {
        if (this.searchForm.value === '') {
          this.coursesService.resetCounter();
          this.showLoadMoreBtn();
          return this.coursesService.getCoursesList();
        } else {
          this.hideLoadMoreBtn();
          return this.coursesService.searchCourse(searchResult)
        }
      }),
    )}

  ngAfterViewInit() {
    console.log("modalWindow:", this.modalWindow?.testMethod());
  }

  onLoadMoreClick() {
    this.coursesService.counterUp();
    this.courses$ = this.coursesService.getCoursesList();
  }

  onAcceptDelete(idToRemove: number): void {
    this.courses$ = this.coursesService.removeCourse(idToRemove).pipe(
      switchMap(() => this.coursesService.getCoursesList())
    )
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

  public onChangeSearchField() {
    this.searchTermSubj.next(this.searchForm.value);
  }

  onClick() {
    console.log('Starting action!', this.store)
  }
}
