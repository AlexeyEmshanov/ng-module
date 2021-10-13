import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CourseDetailsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ CourseDetailsComponent ]
})
export class CourseDetailsModule { }
