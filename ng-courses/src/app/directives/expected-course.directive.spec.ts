import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from '../components/course-item/course-item.component';
import { ExpectedCourseDirective } from './expected-course.directive';

describe('ExpectedCourseDirective', () => {
  let component: CourseItemComponent;

  it('should create an instance', () => {
    const directive = new ExpectedCourseDirective(new ElementRef(component));
    console.log('testing', directive);
    expect(directive).toBeTruthy();
  });
});
