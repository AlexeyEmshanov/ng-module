import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, throwError, of } from 'rxjs';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { AuthService } from 'src/app/services/auth.service';
import { CoursesService } from 'src/app/services/courses.service';

import { EditCourseResolver } from './edit-course.resolver';

describe('EditCourseResolver', () => {
  let resolver: EditCourseResolver;
  let coursesService: CoursesService;

  let routeMock: any = { snapshot: {}, params: {id: 1} };
  let routeStateMock: any = { snapshot: {}, url: '/courses/:id' };
  let routerMock = { navigate: jasmine.createSpy('navigate') };

  const mockCourse: ICourse = {
    id: 111,
    name: 'Test course',
    description: 'Test description',
    isTopRated: true,
    date: new Date(),
    authors: [],
    length: 150,
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [
        {provide: Router, useValue: routerMock },
      ]
    });
    resolver = TestBed.inject(EditCourseResolver);
    coursesService = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
    expect(coursesService).toBeTruthy();
  });

  it('should redirect to 404 page if course with such ID does not exist', () => {
    spyOn(coursesService, 'getCourseById').and.returnValue(throwError('course with such ID does not exist'));
    resolver.resolve(routeMock);
    expect(routerMock.navigate).toHaveBeenCalledWith(['**']);
  })

  it('should return oservable with course data if course with such ID is exist', () => {
    spyOn(coursesService, 'getCourseById').and.returnValue(of(mockCourse));
    resolver.resolve(routeMock).subscribe(data => {
      expect(data).toEqual(mockCourse);
    });
  })
});
