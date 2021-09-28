import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, ChangeDetectorRef } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() courseItem?: ICourse;

  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor(public modalService: ModalService, public coursesService: CoursesService) { }

  // ngOnInit(): void {
  //   let test1 = 'test values in ngOnInit at course-item';
  //   // console.log('Course-item ngOnInit!!!', test1);
  // }

  public onDeleteClick(): void {
    this.modalService.showModalWindow();
    this.deleteCourse.emit(this.courseItem?.id);
  }

  public onEditClick() {
    const updatedData = {
      newTitle: 'updated title',
      newDuration: 555
    }

    if (this.courseItem !== undefined) {
      // this.coursesService.updateCourse(this.courseItem.id, {newTitle: 'MODIFIED COURSE', newDuration: 555})
      // this.coursesService.getCoursesList();
      const updatedCourse: ICourse = {
        id: this.courseItem.id,
        title: updatedData.newTitle,
        creationDate: this.courseItem.creationDate,
        duration: updatedData.newDuration,
        description: this.courseItem.description,
        topRated: this.courseItem.topRated,
      }
      this.courseItem = updatedCourse;
    }
  }

}
