import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  let routeMock: any = { snapshot: {} };
  let routeStateMockCourses: any = { snapshot: {}, url: '/courses' };
  let routeStateMockEditCourse: any = { snapshot: {}, url: '/courses/:id' };
  let routeStateMockNewCourse: any = { snapshot: {}, url: '/new' };
  let routerMock = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ {provide: Router, useValue: routerMock }]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
    expect(authService).toBeTruthy();
  });

  it('guard should return false and redirect to login page if an unauthenticated user tries open course page, edit page, and create new course page', () => {
    spyOn(authService, 'isAuth').and.returnValue(false);
    expect(guard.canActivate(routeMock, routeStateMockCourses)).toEqual(false);
    expect(guard.canActivate(routeMock, routeStateMockEditCourse)).toEqual(false);
    expect(guard.canActivate(routeMock, routeStateMockNewCourse)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['login']);
  })

  it('guard should return true if authenticated user tries open courses page, edit page, and create new course page', () => {
    spyOn(authService, 'isAuth').and.returnValue(true);
    expect(guard.canActivate(routeMock, routeStateMockCourses)).toEqual(true);
    expect(guard.canActivate(routeMock, routeStateMockEditCourse)).toEqual(true);
    expect(guard.canActivate(routeMock, routeStateMockNewCourse)).toEqual(true);
  })
});
