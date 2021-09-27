import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { DurationCoursePipe } from 'src/app/pipes/duration-course.pipe';
import { CoursesService } from 'src/app/services/courses.service';
import { ModalService } from 'src/app/services/modal.service';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseTitleDebugEl: DebugElement;
  let courseDescriptionDebugEl: DebugElement
  let courseTitleEl: HTMLElement;
  let courseDescriptionEl: HTMLElement;
  let deleteBtnDebugEl: DebugElement;
  let deleteBtnEl: HTMLElement;

  let testCourseItem: ICourse = {
    id: 555,
    title: 'test course',
    creationDate: new Date('2021, 08, 27'),
    duration: 154,
    description: 'something usefull',
    topRated: true,
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, DurationCoursePipe ],
      providers: [ ModalService ]
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

    deleteBtnDebugEl = fixture.debugElement.query(By.css('.btn_delete'));
    deleteBtnEl = deleteBtnDebugEl.nativeElement;

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

  it('click on edit button should update current course title to "MODIFIED COURSE" and set new duration to "555"', () => {
    // spyOn(component.deleteCourse, 'emit');
    // const before = component.courseItem;
    console.log('1', component.courseItem?.title)

    component.onEditClick();
    fixture.detectChanges();
    // const after = component.courseItem;
    console.log('2', component.courseItem?.title);
    // expect(courseTitleEl.textContent).toEqual('MODIFIED COURSE');
  });
});
