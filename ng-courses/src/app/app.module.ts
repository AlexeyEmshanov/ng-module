import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NotFoundPageModule } from './not-found-page/not-found-page.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoadingWindowComponent } from './components/loading-window/loading-window.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { CoreStoreModule } from './core/+store/core-store.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    CourseItemComponent,
    ExpectedCourseDirective,
    ModalWindowComponent,
    LoadingWindowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    LoginPageModule,
    AddPageModule,
    EditPageModule,
    NotFoundPageModule,
    BreadcrumbsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument( {maxAge: 25, logOnly: environment.production } ),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
