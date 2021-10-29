import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppSettings } from '../app.settings';
import { ICourse } from '../model/interfaces/icourse';
import { AuthService } from '../services/auth.service';
import { CoursesService } from '../services/courses.service';

import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let coursesService: CoursesService;
  let httpTestingController: HttpTestingController;
  let authService: AuthService;

  const mockCourses: ICourse[] = [
    {
      id: 999,
      name: 'New interesting course',
      date: new Date(),
      length: 55,
      description: 'some new course',
      isTopRated: true,
      authors: []
    },
    {
      id: 919191,
      name: 'New interesting course 2',
      date: new Date(),
      length: 77,
      description: 'some new interesting course 2',
      isTopRated: false,
      authors: []
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ],
    });

    coursesService = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(coursesService).toBeTruthy();
    expect(httpTestingController).toBeTruthy();
  });

  it('AuthInteceptor should add AuthToken header to request (GET example)', () => {
    spyOn(authService, 'getUserToken').and.returnValue('INTERCEPTOR-TOKEN')

    coursesService.getCoursesList().subscribe(
      data => expect(data).toBeTruthy()
    );

    const req = httpTestingController.expectOne(AppSettings.BASE_URL + `/courses?start=0&count=5`);
    expect(req.request.headers.get('AuthToken')).toBe('INTERCEPTOR-TOKEN');
    req.flush(mockCourses);
  })

  it('AuthInteceptor should return request without AuthToken header, if token does not exist', () => {
    spyOn(authService, 'getUserToken').and.returnValue(null)

    coursesService.getCoursesList().subscribe(
      data => expect(data).toBeTruthy()
    );

    const req = httpTestingController.expectOne(AppSettings.BASE_URL + `/courses?start=0&count=5`);
    expect(req.request.headers.has('AuthToken')).toBeFalse();
    req.flush(mockCourses);
  })
});
