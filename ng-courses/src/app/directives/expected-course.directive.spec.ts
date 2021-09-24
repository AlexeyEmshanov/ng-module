import { createComponent } from '@angular/compiler/src/core';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CourseItemComponent } from '../components/course-item/course-item.component';
import { ExpectedCourseDirective } from './expected-course.directive';

@Component({
  template: `<div
    class="test-component" appExpectedCourse
    style="border: 1px #FFFFFF solid"
  >TEST</div>`
})
class DummyCourseItemComponent { }


describe('ExpectedCourseDirective', () => {
  let component: DummyCourseItemComponent;
  let fixture: ComponentFixture<DummyCourseItemComponent>;
  let divElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyCourseItemComponent , ExpectedCourseDirective ],
    });

    fixture = TestBed.createComponent(DummyCourseItemComponent);
    component = fixture.componentInstance;
    divElement = fixture.debugElement.query(By.css('.test-component'));
    // console.log(divElement);
    fixture.detectChanges();
  })

  const today = new Date();
  const testCourseDate = new Date(( (new Date()).setDate(today.getDate() - 10)));


  it('should create an instance', () => {
    const directive = new ExpectedCourseDirective(new ElementRef(component));
    expect(directive).toBeTruthy();
  });

  it('today should be actual course', () => {
    const directive = new ExpectedCourseDirective(new ElementRef(component));
    // console.log('DIRECTIVE', directive);
    directive.startCourseDate = testCourseDate;
    // console.log('DIRECTIVE', directive);
    console.log('111');
    console.log('DIVELEMENT', divElement);
    directive.ngOnInit()
    console.log('222');
    fixture.detectChanges();
    console.log('DIVELEMENT', divElement);
    expect(divElement.nativeElement.style.border).toBe('1px #a0d1a0 solid');
  });
});
