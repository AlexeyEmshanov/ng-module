import { DurationCoursePipe } from './duration-course.pipe';

describe('DurationCoursePipe', () => {
  it('create an instance', () => {
    const pipe = new DurationCoursePipe();
    expect(pipe).toBeTruthy();
  });
  it('transform 150 to 2h 30min', () => {
    const pipe = new DurationCoursePipe();
    expect(pipe.transform(150)).toBe('2h 30min');
  });
  it('transform 50 to 50min', () => {
    const pipe = new DurationCoursePipe();
    expect(pipe.transform(50)).toBe('50min');
  });
  it('transform 125 to 2h 05min', () => {
    const pipe = new DurationCoursePipe();
    expect(pipe.transform(125)).toBe('2h 05min');
  });
});
