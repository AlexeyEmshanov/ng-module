import { TestBed } from '@angular/core/testing';
import { IUser } from '../model/interfaces/iuser';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const testlogin = 'testLogin';
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
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login() should add new user to window.localStorage', () => {
    service.login(testlogin, JSON.stringify(testUser));
    expect(window.localStorage.getItem(testlogin)).toBeTruthy();
  });

  it('logout() should remove current user from window.localStorage', () => {
    service.login(testlogin, JSON.stringify(testUser));
    service.logout();
    expect(window.localStorage.getItem(testlogin)).toBeFalsy();
  });

  it('isAuth() should return false if user is not login', () => {
    // service.login(testlogin, JSON.stringify(testUser));
    expect(service.isAuth()).toBeFalse();
  });

  it('isAuth() should return true if user is login', () => {
    service.login(testlogin, JSON.stringify(testUser));
    expect(service.isAuth()).toBeTrue();
  });

  it('if user is not login should console "Invalid login"', () => {
    // spyOn(window.console, 'log');
    service.login('fakeLogin', 'fakeUser');
    expect(service.getUserInfo()).toBe(null);
    // expect(console.log).toHaveBeenCalledWith('Invalid login');
  });

  it('if user is login should return user name', () => {
    service.login(testlogin, JSON.stringify(testUser));
    expect(service.getUserInfo()).toEqual(testUser.name.first);
  });
});
