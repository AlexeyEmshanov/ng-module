import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { ExpectedCourseDirective } from './directives/expected-course.directive';
import { DurationCoursePipe } from './pipes/duration-course.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LoginPageModule } from './login-page/login-page.module';
import { AddPageModule } from './add-page/add-page.module';


@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    CourseItemComponent,
    ExpectedCourseDirective,
    DurationCoursePipe,
    OrderByPipe,
    FilterCoursesPipe,
    ModalWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    LoginPageModule,
    AddPageModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
