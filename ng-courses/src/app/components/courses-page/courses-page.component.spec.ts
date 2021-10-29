import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { not } from '@angular/compiler/src/output/output_ast';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ExpectedCourseDirective } from 'src/app/directives/expected-course.directive';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';
import { DurationCoursePipe } from 'src/app/shared/pipes/duration-course.pipe';
import { FilterCoursesPipe } from 'src/app/shared/pipes/filter-courses.pipe';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseItemComponent } from '../course-item/course-item.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

import { CoursesPageComponent } from './courses-page.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  template: ''
})
export class ModalWindowStubComponent {
  public showModalWindow() {}
}

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  let debugElements: DebugElement[];
  let loadMoreBtnDebugElement: DebugElement[];
  let loadMoreBtnElement: HTMLElement;
  let coursesService: CoursesService;
  let httpTestingController: HttpTestingController;
  let modalWindow: ModalWindowComponent;

  const mockCourses: ICourse[] = [
    {
      id: 999,
      name: 'Very new interesting course',
      date: new Date(),
      length: 55,
      description: 'some new course',
      isTopRated: true,
      authors: []
    },
    {
      id: 919191,
      name: 'New interesting course 2',
      date: new Date(),
      length: 77,
      description: 'some new interesting course 2',
      isTopRated: false,
      authors: []
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent, ExpectedCourseDirective, CourseItemComponent, DurationCoursePipe, OrderByPipe, FilterCoursesPipe, ],
      imports: [ FormsModule, SharedModule, AppRoutingModule, HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    coursesService = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
    modalWindow = TestBed.createComponent(ModalWindowComponent).componentInstance

    // modalWindow = TestBed.inject(ModalWindowComponent)

    component.courses = mockCourses;

    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
    });

  it('should render 2 course items on initial stage (quantity paging)', () => {
    component.ngOnInit(); //* useless action, nothing changes *//

    fixture.detectChanges();
    debugElements = fixture.debugElement.queryAll(By.css('app-course-item'));
    let courseItemsArr = debugElements.map(el => el.nativeElement);
    expect(courseItemsArr.length).toBe(mockCourses.length);
  });

  it('should return all courses (2 at test) if searchField is empty', () => {
    spyOn(coursesService, 'resetCounter');
    spyOn(component, 'showLoadMoreBtn');
    spyOn(coursesService, 'getCoursesList').and.returnValue(of(mockCourses));
    component.searchField = '';
    component.onSearchClick();

    fixture.detectChanges();

    debugElements = fixture.debugElement.queryAll(By.css('app-course-item'));
    expect(coursesService.resetCounter).toHaveBeenCalled();
    expect(component.showLoadMoreBtn).toHaveBeenCalled();
    expect(debugElements.length).toBe(2);
  })

  it('should return only 1 course containig testing search phrase "Very"', () => {
    spyOn(component, 'hideLoadMoreBtn');
    spyOn(coursesService, 'searchCourse').and.returnValue(of([mockCourses[0]]));
    component.searchField = 'Very';
    component.onSearchClick();
    fixture.detectChanges();
    debugElements = fixture.debugElement.queryAll(By.css('app-course-item'));

    expect(component.hideLoadMoreBtn).toHaveBeenCalled();
    expect(debugElements.length).toBe(1);
  })

  it('On Load More button click should get additional courses (2 -> 4)', () => {
    const extenedeMockCourses = mockCourses.concat(mockCourses);

    expect(component.courses.length).toBe(2);

    spyOn(coursesService, 'getCoursesList').and.returnValue(of(extenedeMockCourses));

    loadMoreBtnDebugElement = fixture.debugElement.queryAll(By.css('.btn_load-more'));
    loadMoreBtnElement = loadMoreBtnDebugElement[0].nativeElement;
    loadMoreBtnElement.click();

    fixture.detectChanges();

    debugElements = fixture.debugElement.queryAll(By.css('app-course-item'));
    expect(debugElements.length).toBe(4);

    expect(component.courses.length).toBe(4);
  })

  it('onAcceptDelete() method should remove course item with certain id (2 -> 1)', () => {
    expect(component.courses.length).toBe(2);

    spyOn(coursesService, 'getCoursesList').and.returnValue(of([mockCourses[1]]));
    spyOn(coursesService, 'removeCourse').and.returnValue(of([mockCourses[1]]));

    component.onAcceptDelete(mockCourses[0].id);

    fixture.detectChanges();

    debugElements = fixture.debugElement.queryAll(By.css('app-course-item'));

    expect(debugElements.length).toBe(1);
    expect(component.courses.length).toBe(1);
    expect(component.courses[0]).toEqual(mockCourses[1]);
  })

  it('onDeleteCourse() should change state of idToRemove', () => {
    // spyOn(modalWindow, 'showModalWindow'); /* не разобрался с открытием модалки, пробовал и стаб-компонент и spyOn */
    // modalWindow.isModalShown = true;
    component.onDeleteCourse(mockCourses[0].id);

    // expect(modalWindow.showModalWindow).toHaveBeenCalled();

    fixture.detectChanges();

    expect(component.idToRemove).toEqual(mockCourses[0].id);
  })

  it('hideLoadMoreBtn nethod should switch loadMoreBtnIsShown to false', () => {
    component.hideLoadMoreBtn();

    expect(component.loadMoreBtnIsShown).toBeFalse();
  })

  it('showLoadMoreBtn nethod should switch loadMoreBtnIsShown to false', () => {
    component.showLoadMoreBtn();

    expect(component.loadMoreBtnIsShown).toBeTrue();
  })
});
