import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/icourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem?: ICourse;

  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  public test = false;

  constructor() {

  }

  public delete(): void {
    console.log(`Course with ID ${this.courseItem?.id} was deleted!`)
    this.deleteCourse.emit();
  }

  ngOnInit(): void {
    let test1 = 'test values in ngOnInit at course-item';
    console.log('Course-item ngOnInit!!!', test1);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   console.log('Course-item ngOnChanges!!!', changes);

  // }

}
