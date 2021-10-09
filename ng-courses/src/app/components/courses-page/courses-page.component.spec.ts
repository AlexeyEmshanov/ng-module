import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ExpectedCourseDirective } from 'src/app/directives/expected-course.directive';
import { DurationCoursePipe } from 'src/app/shared/pipes/duration-course.pipe';
import { FilterCoursesPipe } from 'src/app/shared/pipes/filter-courses.pipe';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseItemComponent } from '../course-item/course-item.component';

import { CoursesPageComponent } from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  let debugElements: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent, ExpectedCourseDirective, CourseItemComponent, DurationCoursePipe, OrderByPipe, FilterCoursesPipe ],
      imports: [ FormsModule, SharedModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
    });

  it('should render 10 course items on initial stage (quantity of mock-data)', () => {
    component.ngOnInit(); //* useless action, nothing changes *//
    fixture.detectChanges();
    debugElements = fixture.debugElement.queryAll(By.css('app-course-item'));
    let courseItemsArr = debugElements.map(el => el.nativeElement);
    expect(courseItemsArr.length).toBe(10);
  });

  it('should find only 2 course items with title containig number "1" on initial stage', () => {
    component.searchField = '1';
    component.onSearchClick();
    fixture.detectChanges();

    debugElements = fixture.debugElement.queryAll(By.css('app-course-item'));
    expect(debugElements.length).toBe(2);
  })

  it('onAcceptDelete() method should remove course item with id "3" => courses quantity sholud decrement', () => {
    debugElements = fixture.debugElement.queryAll(By.css('app-course-item'));
    const coursesBefore = debugElements.length;

    component.onAcceptDelete(3);
    fixture.detectChanges();

    debugElements = fixture.debugElement.queryAll(By.css('app-course-item'));
    const coursesAfter = debugElements.length;

    expect(coursesBefore - 1).toBe(coursesAfter);
  })
});
