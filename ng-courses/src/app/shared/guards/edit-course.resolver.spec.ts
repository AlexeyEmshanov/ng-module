import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditCourseResolver } from './edit-course.resolver';

describe('EditCourseResolver', () => {
  let resolver: EditCourseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    resolver = TestBed.inject(EditCourseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
