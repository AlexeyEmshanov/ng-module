import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ModalService } from 'src/app/services/modal.service';
import { ICourse } from './../../model/interfaces/icourse';
import { testAnimation } from '../modal-window/modal-window.component';
import { FilterCoursesPipe } from 'src/app/shared/pipes/filter-courses.pipe';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  // providers: [ FilterCoursesPipe ],
  animations: [ testAnimation ],
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = [];

  public searchField: string = '';

  public idToRemove: number = 0;

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

  onAcceptDelete(idToRemove: number): void {
    this.courses = this.coursesService.removeCourse(idToRemove);
    this.courses = this.coursesService.getCoursesList();
    this.modalServise.hideModalWindow();
  }

  getIsEmpty() {
    return this.courses.length === 0
  }

  onDeleteCourse(clickedId: number) {
    this.modalServise.showModalWindow();
    this.idToRemove = clickedId;
  }

  onEditCourse(id: number) {
    this.courses = this.coursesService.updateCourse(id, {newTitle: 'updated title', newDuration: 555})
  }

}
