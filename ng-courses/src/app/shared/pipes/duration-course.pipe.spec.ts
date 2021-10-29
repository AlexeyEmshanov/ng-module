import { DurationCoursePipe } from './duration-course.pipe';

describe('DurationCoursePipe', () => {
  const pipe = new DurationCoursePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform 150 to 2h 30min', () => {
    expect(pipe.transform(150)).toBe('2h 30min');
  });

  it('transform 50 to 50min', () => {
    expect(pipe.transform(50)).toBe('50min');
  });

  it('transform 125 to 2h 05min', () => {
    expect(pipe.transform(125)).toBe('2h 05min');
  });

  it('if duration is undefined should return warning "invalid course duration format"', () => {
    const warning = 'invalid course duration format'
    expect(pipe.transform(undefined)).toBe(warning);
  });

  it('if duration is null should return epmty string', () => {
    const warning = ''
    expect(pipe.transform(null)).toBe(warning);
  });
});
