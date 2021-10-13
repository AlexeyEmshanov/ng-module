import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/components/add-page/add-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { EditPageComponent } from './edit-page/components/edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/components/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'courses/new', component: AddPageComponent },
  { path: 'courses/:id', component: EditPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
