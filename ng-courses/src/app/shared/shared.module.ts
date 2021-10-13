import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DurationCoursePipe } from './pipes/duration-course.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DurationCoursePipe,
    FilterCoursesPipe,
    OrderByPipe,
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    DurationCoursePipe,
    FilterCoursesPipe,
    OrderByPipe,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    AppRoutingModule
  ],
  providers: [ FilterCoursesPipe ]
})
export class SharedModule { }
