import { TestBed } from '@angular/core/testing';

import { EditCourseResolver } from './edit-course.resolver';

describe('EditCourseResolver', () => {
  let resolver: EditCourseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditCourseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
