import { COURSES } from '../model/mock-data';
import { FilterCoursesPipe } from './filter-courses.pipe';

const courses = COURSES;

describe('FilterCoursesPipe', () => {
  const pipe = new FilterCoursesPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should be only 1 course containing title that includes "2"', () => {
    expect(pipe.transform(courses, '2').length).toBe(1);
  });

  it('should be only 2 courses containing title that includes "1"', () => {
    expect(pipe.transform(courses, '1').length).toBe(2);
  });

  it('should be 10 courses containing title that includes "course"', () => {
    expect(pipe.transform(courses, 'course').length).toBe(10);
  });

  it('should be 0 courses containing title that includes "like"', () => {
    expect(pipe.transform(courses, 'like').length).toBe(0);
  });
});
