import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { FooterComponent } from '../core/components/footer/footer.component';



@NgModule({
  declarations: [
    AddCoursePageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  exports: [ AddCoursePageComponent, HeaderComponent, FooterComponent ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AddCoursePageModule { }
