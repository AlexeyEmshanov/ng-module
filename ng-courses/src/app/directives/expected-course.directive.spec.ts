import { createComponent } from '@angular/compiler/src/core';
import { Component, DebugElement, ElementRef, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseItemComponent } from '../components/course-item/course-item.component';
import { ExpectedCourseDirective } from './expected-course.directive';

@Component({
  template: `<div
    class="test-component" appExpectedCourse [startCourseDate]="startCourseDate"
    style="border: 1px #FFFFFF solid"
  >TEST</div>`
})
class DummyCourseItemComponent {
  @Input() startCourseDate?: Date;
}


describe('ExpectedCourseDirective', () => {
  const today = new Date();
  const tenDaysBefore = new Date((new Date()).setDate((new Date()).getDate() - 13));
  const pastDay = new Date((new Date()).setDate((new Date()).getDate() - 30));
  const futureDay = new Date((new Date()).setDate((new Date()).getDate() + 30));

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
  })

  it('today should be fresh course and contain "fresh" class', () => {
    component.startCourseDate = today;
    fixture.detectChanges();
    expect(divElement.nativeElement.classList).toContain('fresh');
  });

  it('14 days earlier than today should be expected course and contain "fresh" class', () => {
    component.startCourseDate = tenDaysBefore;
    fixture.detectChanges();
    console.log('14 days', today, tenDaysBefore)
    expect(divElement.nativeElement.classList).toContain('fresh');
  });

  it('future day should be upcoming course and contain "upcoming" class', () => {
    component.startCourseDate = futureDay;
    fixture.detectChanges();
    expect(divElement.nativeElement.classList).toContain('upcoming');
  });

  it('past day should not contain "upcoming" & "fresh" classes', () => {
    component.startCourseDate = pastDay;
    fixture.detectChanges();
    expect(divElement.nativeElement.classList).not.toContain('upcoming');
    expect(divElement.nativeElement.classList).not.toContain('fresh');
  });
});
