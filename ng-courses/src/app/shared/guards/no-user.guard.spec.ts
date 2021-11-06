import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NoUserGuard } from './no-user.guard';
import { Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';


describe('NoUserGuard', () => {
  let guard: NoUserGuard;
  let authService: AuthService;

  // let routeMock: any = { snapshot: {} };
  // let routeStateMock: any = { snapshot: {}, url: '/courses' };
  let routerMock = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ { provide: Router, useValue: routerMock },  ]
    });
    guard = TestBed.inject(NoUserGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
    expect(authService).toBeTruthy();
  });

  it('should not redirect an authenticated user to the courses page', () => {
    spyOn(authService, 'isAuth').and.returnValue(of(false));
    guard.canActivate().subscribe(data => {
      expect(data).toEqual(true);
    })
    expect(routerMock.navigate).not.toHaveBeenCalledWith(['courses']);
  })

  it('should redirect an authenticated user to the courses page', () => {
    spyOn(authService, 'isAuth').and.returnValue(of(true));
    guard.canActivate().subscribe(data => {
      expect(data).toEqual(false);
    })
    expect(routerMock.navigate).toHaveBeenCalledWith(['courses']);

  })
});
