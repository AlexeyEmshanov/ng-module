import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DurationCoursePipe } from './pipes/duration-course.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [
    DurationCoursePipe,
    FilterCoursesPipe,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    DurationCoursePipe,
    FilterCoursesPipe,
    OrderByPipe
  ],
  providers: [ FilterCoursesPipe ]
})
export class SharedModule { }
