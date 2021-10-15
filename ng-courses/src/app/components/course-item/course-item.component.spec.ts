import { query } from '@angular/animations';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ExpectedCourseDirective } from 'src/app/directives/expected-course.directive';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';
import { ModalService } from 'src/app/services/modal.service';
import { DurationCoursePipe } from 'src/app/shared/pipes/duration-course.pipe';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseTitleDebugEl: DebugElement;
  let courseDescriptionDebugEl: DebugElement
  let courseTitleEl: HTMLElement;
  let courseDurationDebugEl: DebugElement
  let courseDurationEl: HTMLElement;
  let courseDescriptionEl: HTMLElement;
  let deleteBtnDebugEl: DebugElement;
  let deleteBtnEl: HTMLElement;
  let editBtnDebugEl: DebugElement;
  let editBtnEl: HTMLElement;


  let testCourseItem: ICourse = {
    id: 555,
    title: 'test course',
    courseDate: new Date('2021, 08, 27'),
    duration: 154,
    description: 'something usefull',
    topRated: true,
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, DurationCoursePipe, ExpectedCourseDirective ],
      imports: [ AppRoutingModule ],
      providers: [ ModalService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.courseItem = testCourseItem;

    courseTitleDebugEl = fixture.debugElement.query(By.css('.course-item__title'));
    courseTitleEl = courseTitleDebugEl.nativeElement;

    courseDescriptionDebugEl = fixture.debugElement.query(By.css('.course-item__description'));
    courseDescriptionEl = courseDescriptionDebugEl.nativeElement;

    courseDurationDebugEl = fixture.debugElement.query(By.css('.course-item__duration'));
    courseDurationEl = courseDurationDebugEl.nativeElement;

    deleteBtnDebugEl = fixture.debugElement.query(By.css('.btn_delete'));
    deleteBtnEl = deleteBtnDebugEl.nativeElement;

    editBtnDebugEl = fixture.debugElement.query(By.css('.btn_edit'));
    editBtnEl = editBtnDebugEl.nativeElement;

    fixture.detectChanges();
  });

  it('course title and description text should be equal to input item object property', () => {
    expect(courseTitleEl.textContent).toEqual(testCourseItem.title.toUpperCase());
    expect(courseDescriptionEl.textContent).toEqual(testCourseItem.description);
  });

  it('click on delete button should emit event with course id', () => {
    spyOn(component.deleteCourse, 'emit');
    deleteBtnEl.click();

    expect(component.deleteCourse.emit).toHaveBeenCalledWith(testCourseItem.id);
  });

  // it('click on edit button should emit event with course id', () => {
  //   spyOn(component.editCourse, 'emit');
  //   editBtnEl.click();

  //   expect(component.editCourse.emit).toHaveBeenCalledOnceWith(testCourseItem.id);
  // });
});
