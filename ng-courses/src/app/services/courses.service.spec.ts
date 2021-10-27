import { TestBed } from '@angular/core/testing';
import { ICourse } from '../model/interfaces/icourse';
import { COURSES } from '../model/mock-data';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;
  // let courses: ICourse[];

  const newMockCourse: ICourse = {
    id: 999,
    name: 'New interesting course',
    date: new Date(),
    length: 55,
    description: 'some new course',
    isTopRated: true,
    authors: []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(CoursesService);
  });

  afterEach(() => {
    service.removeCourse(newMockCourse.id);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method getCoursesList should return not empty courses list', () => {
    service.getCoursesList().subscribe(
      data => expect(data.length).toBeGreaterThan(0)
    )
    // expect(service.getCoursesList().length).toBeGreaterThan(0);
  })

  // it('method createCourse should add course item to courses list', () => {
  //   const lengthBefore = service.getCoursesList().length;

  //   service.createCourse(newMockCourse);
  //   expect(service.getCoursesList().length).toBe(lengthBefore + 1);
  // })

  // it('method getCourseById should return course with correct id', () => {
  //   service.createCourse(newMockCourse);
  //   expect(service.getCourseById(newMockCourse.id)[0].id).toBe(newMockCourse.id);
  // })

  // it('method removeCourse should remove course with certain id from courses list', () => {
  //   service.createCourse(newMockCourse);
  //   service.removeCourse(newMockCourse.id);
  //   expect(service.getCourseById(newMockCourse.id).length).toBe(0);
  // })

  // it('method updateCourse should update values at course with certain id', () => {
  //   // { newTitle: 'It is a updated title', newDuration: 777 }
  //   const testUpdatedData = newMockCourse;
  //   testUpdatedData.title = 'It is a updated title';
  //   testUpdatedData.duration = 777;
  //   service.createCourse(newMockCourse);
  //   service.updateCourse(testUpdatedData);

  //   expect(service.getCourseById(newMockCourse.id)[0].title).toBe('It is a updated title');
  //   expect(service.getCourseById(newMockCourse.id)[0].duration).toBe(777);
  // })

  // it('method updateCourse should staying the courses quantity as before updates', () => {
  //   const testUpdatedData = newMockCourse;
  //   testUpdatedData.title = 'It is a updated title 2';
  //   testUpdatedData.duration = 111;
  //   const coursesQuantityBefore = service.getCoursesList().length;

  //   service.updateCourse(testUpdatedData);
  //   expect(service.getCoursesList().length).toBe(coursesQuantityBefore);
  // })
})
