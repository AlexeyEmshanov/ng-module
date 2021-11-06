import { HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { finalize } from 'rxjs/operators';
import { AppSettings } from '../app.settings';
import { ICourse } from '../model/interfaces/icourse';
import { CoursesService } from '../services/courses.service';
import { LoadingService } from '../services/loading.service';

import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  let coursesService: CoursesService;
  let httpTestingController: HttpTestingController;
  let loadingService: LoadingService;
  let loadingInterceptor: LoadingInterceptor;

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
        LoadingInterceptor,
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
      ],
    })

    coursesService = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
    loadingService = TestBed.inject(LoadingService);
    loadingInterceptor = TestBed.inject(LoadingInterceptor);

    // httpTestingController.verify();
  });

  it('should be created', () => {
    expect(loadingService).toBeTruthy();
    expect(httpTestingController).toBeTruthy();
    expect(coursesService).toBeTruthy();
  });

  it('LoadingInterceptor should call showLoadingWindow at any http request (GET example)', async () => {
    spyOn(loadingService, 'showLoadingWindow');
    spyOn(loadingService, 'hideLoadingWindow');
    spyOn(loadingInterceptor, 'intercept');

    coursesService.getCoursesList().pipe(
      finalize(() => {
        // tick(1000)
        console.log('finalize')
        // tick(1000)
        expect(loadingService.hideLoadingWindow).toHaveBeenCalled()
      }),
    ).subscribe(
      (data) => {
        expect(data).toBeTruthy();
        expect(loadingService.showLoadingWindow).toHaveBeenCalled();
      }
    );

    // tick(2000);

    const req = httpTestingController.expectOne(AppSettings.BASE_URL + `/courses?start=0&count=5`);
    // expect(req.request.headers.get('AuthToken')).toBe('INTERCEPTOR-TOKEN');
    req.flush(mockCourses);
    // tick();
    // tick(5000)
  })
});
