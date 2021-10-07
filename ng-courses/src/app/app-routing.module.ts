import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursePageComponent } from './add-course-page/components/add-course-page/add-course-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LoginPageComponent } from './login-page/components/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'courses-page', component: CoursesPageComponent },
  { path: 'add-course-page', component: AddCoursePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
