import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DurationCoursePipe } from './pipes/duration-course.pipe';
import { FilterCoursesPipe } from './pipes/filter-courses.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AppRoutingModule } from '../app-routing.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { EditCourseResolver } from './guards/edit-course.resolver';
import { DateFieldComponent } from '../components/date-field/date-field.component';
import { DurationFieldComponent } from '../components/duration-field/duration-field.component';
import { AuthorsInputFieldComponent } from '../components/authors-input-field/authors-input-field.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DurationCoursePipe,
    FilterCoursesPipe,
    OrderByPipe,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    DateFieldComponent,
    DurationFieldComponent,
    AuthorsInputFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule
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
    AppRoutingModule,
    ReactiveFormsModule,
    DateFieldComponent,
    DurationFieldComponent,
    AuthorsInputFieldComponent,
  ],
  providers: [ FilterCoursesPipe, EditCourseResolver ]
})
export class SharedModule { }
