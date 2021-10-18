import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/components/add-page/add-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { EditPageComponent } from './edit-page/components/edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/components/login-page/login-page.component';
import { NotFoundPageComponent } from './not-found-page/components/not-found-page/not-found-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { EditCourseResolver } from './shared/guards/edit-course.resolver';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'courses', component: CoursesPageComponent, /*canActivate: [ AuthGuard] */},
  { path: 'courses/new', component: AddPageComponent, /*canActivate: [ AuthGuard]  */},
  { path: 'courses/:id',
    pathMatch: 'full',
    component: EditPageComponent,
    /*canActivate: [ AuthGuard], */
    resolve: { course: EditCourseResolver }
  },
  { path: '404', component: NotFoundPageComponent},

  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
