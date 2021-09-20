import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem?: ICourse;

  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor(public modalService: ModalService, public coursesService: CoursesService) { }

  ngOnInit(): void {
    let test1 = 'test values in ngOnInit at course-item';
    // console.log('Course-item ngOnInit!!!', test1);
  }

  public onDeleteClick(): void {
    this.modalService.showModalWindow();
    this.deleteCourse.emit(this.courseItem?.id);
  }

  public onEditClick() {
    if (this.courseItem !== undefined) {
      this.coursesService.updateCourse(this.courseItem.id, {newTitle: 'NEW COURSE', newDuration: 555})
      this.coursesService.getCoursesList();
    }
  }

}
