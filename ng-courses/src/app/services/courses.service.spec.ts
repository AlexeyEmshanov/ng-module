import { TestBed } from '@angular/core/testing';
import { ICourse } from '../model/interfaces/icourse';
import { COURSES } from '../model/mock-data';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;
  // let courses: ICourse[];

  const newMockCourse: ICourse = {
    id: 999,
    title: 'New interesting course',
    creationDate: new Date(),
    duration: 55,
    description: 'some new course',
    topRated: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(CoursesService);
    // courses = COURSES;
  });

  afterEach(() => {
    console.log('afterEach')
    service.removeCourse(newMockCourse.id);
    console.log('afterEach!', service.getCoursesList())
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method getCoursesList should return not empty courses list', () => {
    expect(service.getCoursesList().length).toBeGreaterThan(0);
  })

  it('method createCourse should add course item to courses list', () => {
    const lengthBefore = service.getCoursesList().length;

    service.createCourse(newMockCourse);
    expect(service.getCoursesList().length).toBe(lengthBefore + 1);
  })

  it('method getCourseById should return course with correct id', () => {
    service.createCourse(newMockCourse);
    expect(service.getCourseById(newMockCourse.id)[0].id).toBe(newMockCourse.id);
  })

  it('method removeCourse should remove course with certain id from courses list', () => {
    service.createCourse(newMockCourse);
    service.removeCourse(newMockCourse.id);
    expect(service.getCourseById(newMockCourse.id).length).toBe(0);
  })

  it('method updateCourse should update values at course with certain id', () => {
    const testUpdatedData = { newTitle: 'It is a updated title', newDuration: 777 }
    console.log(service.getCoursesList())
    service.createCourse(newMockCourse);
    console.log(service.getCoursesList())
    service.updateCourse(newMockCourse.id, testUpdatedData);

    expect(service.getCourseById(newMockCourse.id)[0].title).toBe(testUpdatedData.newTitle);
    expect(service.getCourseById(newMockCourse.id)[0].duration).toBe(testUpdatedData.newDuration);
  })

  it('method updateCourse should staying the courses quantity as before updates', () => {
    const testUpdatedData = { newTitle: 'It is a updated title 2', newDuration: 111 }
    const coursesQuantityBefore = service.getCoursesList().length;

    service.updateCourse(1, testUpdatedData);
    expect(service.getCoursesList().length).toBe(coursesQuantityBefore);
  })
})
