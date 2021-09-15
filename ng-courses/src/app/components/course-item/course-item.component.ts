import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem?: ICourse;

  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    let test1 = 'test values in ngOnInit at course-item';
    console.log('Course-item ngOnInit!!!', test1);
  }

  public onDelete(): void {
    this.modalService.showModalWindow();
    this.deleteCourse.emit(this.courseItem?.id);
  }

}
