import * as _ from 'lodash';
import { COURSES } from '../model/mock-data';
import { OrderByPipe } from './order-by.pipe';

const courses = _.cloneDeep(COURSES);

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('1st course title should be Course 2', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform(courses)[0].title).toBe('course 2');
  });

  it('2nd course title should be Course 10', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform(courses)[1].title).toBe('course 10');
  });

  it('last course title should be Course 1', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform(courses)[courses.length - 1].title).toBe('course 1');
  });
});
