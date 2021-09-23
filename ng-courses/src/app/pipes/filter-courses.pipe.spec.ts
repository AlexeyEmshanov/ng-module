import { ICourse } from '../model/interfaces/icourse';
import { FilterCoursesPipe } from './filter-courses.pipe';

const courses: ICourse[] = [
  {
    id: 1,
    title: 'course 1',
    creationDate: new Date('09/01/2023'),
    duration: 120,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: false,
  },
  {
    id: 2,
    title: 'course 2',
    creationDate: new Date('09/02/2020'),
    duration: 150,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: true,
  },
  {
    id: 3,
    title: 'course 3',
    creationDate: new Date('09/03/2021'),
    duration: 180,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: true,
  },
  {
    id: 4,
    title: 'course 4',
    creationDate: new Date('09/15/2021'),
    duration: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: false,
  },
  {
    id: 5,
    title: 'course 5',
    creationDate: new Date('10/01/2021'),
    duration: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: true,
  },
  {
    id: 6,
    title: 'course 6',
    creationDate: new Date('10/05/2021'),
    duration: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: false,
  },
  {
    id: 7,
    title: 'course 7',
    creationDate: new Date('10/10/2021'),
    duration: 150,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: false,
  },
  {
    id: 8,
    title: 'course 8',
    creationDate: new Date('11/01/2021'),
    duration: 500,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: false,
  },
  {
    id: 9,
    title: 'course A9',
    creationDate: new Date('11/24/2021'),
    duration: 750,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: false,
  },
  {
    id: 10,
    title: 'course 10',
    creationDate: new Date('01/18/2021'),
    duration: 250,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sed elit ac consequat. Quisque laoreet neque vitae lorem gravida tempor. Pellentesque leo lectus, auctor ac ex molestie, mattis pulvinar orci. Praesent at euismod quam.',
    topRated: false,
  },
];

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

  it('should be 0 courses containing title that includes "zzzzz"', () => {
    expect(pipe.transform(courses, 'like').length).toBe(0);
  });
});
