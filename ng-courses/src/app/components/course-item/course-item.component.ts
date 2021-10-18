import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/model/interfaces/icourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() courseItem?: ICourse;

  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public onDeleteClick(): void {
    this.deleteCourse.emit(this.courseItem?.id);
  }

  public onEditClick() {
    this.router.navigate([this.courseItem?.id], {relativeTo: this.activatedRoute});
  }

}
