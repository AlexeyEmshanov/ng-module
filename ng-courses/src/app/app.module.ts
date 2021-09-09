import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { ExpectedCourseDirective } from './directives/expected-course.directive';
import { DurationCoursePipe } from './pipes/duration-course.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    CoursesPageComponent,
    CourseItemComponent,
    ExpectedCourseDirective,
    DurationCoursePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
