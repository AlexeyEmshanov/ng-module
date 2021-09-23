import { TestBed } from '@angular/core/testing';
import { ICourse } from '../model/interfaces/icourse';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;
  let courses: ICourse[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
    courses = [];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method getCoursesList should return courses list array with ICourse interface', () => {

    expect(typeof service.getCoursesList()).toBe(typeof courses)
  });

  it('method getCoursesList should return not be empty courses list', () => {
    expect(service.getCoursesList().length).toBeGreaterThan(0);
  })

  it('method createCourse should add course item to courses list', () => {
    const newMockCourse: ICourse = {
      id: 999,
      title: 'New Interesting Course',
      creationDate: new Date(),
      duration: 55,
      description: 'some new course',
      topRated: true,
    };

    const lengthBefore = service.getCoursesList().length;

    service.createCourse(newMockCourse);
    expect(service.getCoursesList().length).toBe(lengthBefore + 1);
  })
})
