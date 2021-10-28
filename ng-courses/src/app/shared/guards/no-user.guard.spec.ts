import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NoUserGuard } from './no-user.guard';
import { Router } from '@angular/router';


describe('NoUserGuard', () => {
  let guard: NoUserGuard;
  let authService: AuthService;

  let routeMock: any = { snapshot: {} };
  // let routeStateMock: any = { snapshot: {}, url: '/courses' };
  let routerMock = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ { provide: Router, useValue: routerMock } ]
    });
    guard = TestBed.inject(NoUserGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
    expect(authService).toBeTruthy();
  });

  it('should not redirect an unauthenticated user to the courses page', () => {
    spyOn(authService, 'isAuth').and.returnValue(true);
    expect(guard.canActivate()).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['courses']);
  })

  it('should redirect an authenticated user to the courses page', () => {
    spyOn(authService, 'isAuth').and.returnValue(false);
    expect(guard.canActivate()).toEqual(true);
  })
});
