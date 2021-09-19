import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersStorage = window.localStorage;

  constructor() { }

  public login(login: string, user: string) {
    this.usersStorage.setItem(login, user);
    console.log('Login happend!', this.usersStorage.getItem(login));
  }

  public logout(loginName: string) {
    this.usersStorage.removeItem(loginName);
    console.log('Logout happend', this.usersStorage);
  }

  public isAuth(currentLogin: string): boolean {
    return this.getUserInfo(currentLogin) ? true : false
  }

  public getUserInfo(loginName: string) {
    const userInfo = this.usersStorage.getItem(loginName)

    if (userInfo === null) {
      console.log('Invalid login');
    } else {
      console.log('***', JSON.parse(userInfo))
      return JSON.parse(userInfo);
    }
  }
}