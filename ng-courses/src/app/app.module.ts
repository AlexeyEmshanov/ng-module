import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { ExpectedCourseDirective } from './directives/expected-course.directive';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LoginPageModule } from './login-page/login-page.module';
import { AddPageModule } from './add-page/add-page.module';
import { SharedModule } from './shared/shared.module';
import { EditPageModule } from './edit-page/edit-page.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    CourseItemComponent,
    ExpectedCourseDirective,
    ModalWindowComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    // CommonModule,
    // FormsModule,
    CoreModule,
    SharedModule,
    LoginPageModule,
    AddPageModule,
    EditPageModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
