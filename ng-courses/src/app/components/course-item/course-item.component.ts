import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/icourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem!: ICourse;

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  public delete(): void {
    this.onDelete.emit(this.courseItem.id);
  }

}
