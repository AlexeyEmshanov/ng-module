import { HttpParams, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppSettings } from '../app.settings';
import { ICourse } from '../model/interfaces/icourse';
import { COURSES } from '../model/mock-data';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let coursesService: CoursesService;
  // let courses: ICourse[];
  let httpTestingController: HttpTestingController;

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
      providers: [ CoursesService ]
    });
    coursesService = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(coursesService).toBeTruthy();
    expect(httpTestingController).toBeTruthy();
  });

  it('method getCoursesList should make GET request and return courses with ICourse type', () => {
    const getCoursesUrl = AppSettings.BASE_URL + '/courses?start=0&count=5';

    coursesService.getCoursesList().subscribe(
      (data) => {
        expect(data[0].name).toEqual(mockCourses[0].name);
        expect(data[0]).toEqual(mockCourses[0]);

        expect(data[1].name).toEqual(mockCourses[1].name);
        expect(data[1]).toEqual(mockCourses[1]);
      }
    )

    const req = httpTestingController.expectOne(getCoursesUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCourses);
  });

  it('method createCourse() should make POST reqest and create course with ICourse type', () => {
    const createCoursesUrl = AppSettings.BASE_URL + '/courses';

    coursesService.createCourse(mockCourses[0]).subscribe(
      (data) => {
        expect(data.name).toEqual(mockCourses[0].name);
        expect(data).toEqual(mockCourses[0]);
      }
    )

    const req = httpTestingController.expectOne(createCoursesUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(mockCourses[0]);
  });

  it('method getCourseById() should make GET reqest and return course with certain ID', () => {
    const getCoursesByIdUrl = AppSettings.BASE_URL + `/courses/${mockCourses[0].id}`;

    coursesService.getCourseById(mockCourses[0].id).subscribe(
      (data) => {
        expect(data.name).toEqual(mockCourses[0].name);
        expect(data.id).toEqual(mockCourses[0].id);
        expect(data).toEqual(mockCourses[0]);
      }
    )

    const req = httpTestingController.expectOne(getCoursesByIdUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCourses[0]);
  });

  it('method searchCourse() should make GET reqest and return courses with description or name fields containig certain text fragment', () => {
    const textFragment = 'interest'
    const searchCourseUrl = AppSettings.BASE_URL + `/courses?textFragment=${textFragment}`;

    coursesService.searchCourse(textFragment).subscribe(
      (data) => {
        expect(data[0].name).toEqual(mockCourses[0].name);
        expect(data[0].id).toEqual(mockCourses[0].id);
        expect(data[0]).toEqual(mockCourses[0]);

        expect(data[1].name).toEqual(mockCourses[1].name);
        expect(data[1].id).toEqual(mockCourses[1].id);
        expect(data[1]).toEqual(mockCourses[1]);
      }
    )

    const req = httpTestingController.expectOne(searchCourseUrl);
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.get('textFragment')).toEqual(textFragment);

    req.flush(mockCourses);
  });

  it('method updateCourse() should make PUT reqest and return updated course data', () => {
    const getCoursesByIdUrl = AppSettings.BASE_URL + `/courses/${mockCourses[0].id}`;
    const updatedCourse = {...mockCourses[0], name: 'updated'}

    coursesService.updateCourse(updatedCourse).subscribe(
      (data) => {
        expect(data.name).toEqual('updated');
        expect(data.id).toEqual(updatedCourse.id);
        expect(data).toEqual(updatedCourse);
      }
    )

    const req = httpTestingController.expectOne(getCoursesByIdUrl);
    expect(req.request.method).toEqual('PUT');
    req.flush(updatedCourse);
  });

  it('method removeCourse() should make DELETE reqest and remove certain course from server', () => {
    const getCoursesByIdUrl = AppSettings.BASE_URL + `/courses/${mockCourses[0].id}`;

    coursesService.removeCourse(mockCourses[0].id).subscribe();

    const req = httpTestingController.expectOne(getCoursesByIdUrl);
    expect(req.request.method).toEqual('DELETE');
    req.flush({});

    coursesService.getCourseById(mockCourses[0].id).subscribe(
      data => expect(data).not.toEqual(mockCourses[0])
    )

    const reqToSearch = httpTestingController.expectOne(AppSettings.BASE_URL + `/courses/${mockCourses[0].id}`)
      reqToSearch.flush({})
  });

  it('method counterUp should increase counter by 1', () => {
    let currentCounter = coursesService.counter;
    coursesService.counterUp()
    expect(coursesService.counter).toBe(currentCounter + 1)
  })

  it('method resetCounter should install counter to 1', () => {
    coursesService.resetCounter()
    expect(coursesService.counter).toBe(1)
  })

})
