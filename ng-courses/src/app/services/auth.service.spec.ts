import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Subscription, of, throwError } from 'rxjs';
import { AppSettings } from '../app.settings';
import { IUser } from '../model/interfaces/iuser';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let httpTestingController: HttpTestingController;
  let routerMock = {navigate: jasmine.createSpy('navigate')};
  let usersStorage = window.localStorage;

  const testUser: IUser = {
    id: 19,
    name: {
      first: 'FakeFirstName',
      last: 'FakeLastName'
    },
    login: 'admin',
    password: '12345',
    fakeToken: 'asdasdasd'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ AuthService, { provide: Router, useValue: routerMock } ]
    });
    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);

    window.localStorage.clear();

  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
    // expect(httpClient).toBeTruthy();
    expect(httpTestingController).toBeTruthy();
  });

  it('getUserFromServer should make GET request to the server, and get back testUser', () => {
    const testUrl = AppSettings.BASE_URL + `/users?login=${testUser.login}&password=${testUser.password}`;

    authService.getUserFromServer(testUser.login, testUser.password)
      .subscribe((data) => {
        expect(data).toEqual([testUser]);
      });

    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual('GET');

    req.flush([testUser]);
  });

  it('login method should return IUser type on success, and route to courses page', () => {
    const testUrl = AppSettings.BASE_URL + `/users?login=${testUser.login}&password=${testUser.password}`;

    authService.login(testUser.login, testUser.password);
    const req = httpTestingController.expectOne(testUrl);
    req.flush({});

    expect(routerMock.navigate).toHaveBeenCalledWith(['courses']);
  })


  it('logout() should call clear method from window.localstorage', () => {
    const testUrl = AppSettings.BASE_URL + `/users?login=${testUser.login}&password=${testUser.password}`;
    spyOn(window.localStorage, 'clear')

    authService.login(testUser.login, testUser.password);
    const req = httpTestingController.expectOne(testUrl);
    req.flush({});

    authService.logout();

    expect(window.localStorage.clear).toHaveBeenCalled();

    // expect(localStorage.getItem(testUser.login)).toBeFalse(); /* чушь, факт запроса не происходит */
  });

  it('isAuth() should return false if user is not login', () => {
    // service.login(testlogin, JSON.stringify(testUser));
    expect(authService.isAuth()).toBeFalse();
  });

  it('isAuth() should return true if user is login', () => {
    spyOn(authService, 'getUserInfo').and.returnValue(JSON.stringify(testUser));

    authService.isAuth();

    expect(authService.isAuth()).toBeTrue();
  });

  it('getUserInfo should return null, if user is not login', () => {
    spyOn(window.localStorage, 'getItem').and.callFake(() => null)

    expect(authService.getUserToken()).toEqual(null);
  });


  it('getUserInfo should return user first name, if user is login', () => {
    spyOn(window.localStorage, 'getItem').and.callFake(() => JSON.stringify(testUser))
    expect(authService.getUserInfo()).toEqual(testUser.name.first);
  });

  it('getUserToken should return null, if user is not login', () => {
    spyOn(window.localStorage, 'getItem').and.callFake(() => null)
    expect(authService.getUserToken()).toEqual(null);
  });


  it('getUserToken should return user Obj, if user is login', () => {
    spyOn(window.localStorage, 'getItem').and.callFake(() => JSON.stringify(testUser))
    expect(authService.getUserToken()).toEqual(testUser.fakeToken);
  });

});
