import { COURSES } from '../model/mock-data';
import { FilterCoursesPipe } from './filter-courses.pipe';

let courses = COURSES;

describe('FilterCoursesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterCoursesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be only 1 course containing title that includes "2"', () => {
    const pipe = new FilterCoursesPipe();
    expect(pipe.transform(courses, '2').length).toBe(1);
  });

  it('should be only 2 courses containing title that includes "1"', () => {
    const pipe = new FilterCoursesPipe();
    expect(pipe.transform(courses, '1').length).toBe(2);
  });

  it('should be 10 courses containing title that includes "course"', () => {
    const pipe = new FilterCoursesPipe();
    expect(pipe.transform(courses, 'course').length).toBe(10);
  });

  it('should be 0 courses containing title that includes "like"', () => {
    const pipe = new FilterCoursesPipe();
    expect(pipe.transform(courses, 'like').length).toBe(0);
  });
});
