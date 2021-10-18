import { ThrowStmt } from '@angular/compiler';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserLogin = '';

  private usersStorage = window.localStorage;

  constructor() { }

  public login(login: string, user: string) {
    this.usersStorage.setItem(login, JSON.stringify(user));
    this.currentUserLogin = login;
  }

  public logout(loginName: string) {
    this.usersStorage.removeItem(loginName);
    this.currentUserLogin = '';
  }

  public isAuth(): boolean {
    return this.getUserInfo(this.currentUserLogin) ? true : false
  }

  public getUserInfo(loginName: string) {
    const userInfo = this.usersStorage.getItem(loginName)


    if (userInfo) {
      return JSON.parse(JSON.parse(userInfo));
    } else {
      console.log('Invalid login');
      return null
    }
  }
}
