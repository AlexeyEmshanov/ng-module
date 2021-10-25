import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../model/interfaces/iuser';
import { User } from '../model/user';


const BASE_URL = 'http://localhost:3004'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserLogin = '';

  private usersStorage = window.localStorage;

  public currentUser = new User(0, '', {first: '', last: ''}, '', '')

  constructor(private httpClient: HttpClient, private router: Router) { }

  public login(login: string, password: string): void {
    this.getUserFromServer(login, password).subscribe(
      (resp) => {
        if (resp.length !== 0) {
          console.log('*', this.currentUser.login)
          this.currentUser = resp[0];
          this.usersStorage.setItem(login, JSON.stringify(resp[0]));
          this.currentUserLogin = resp[0].login;
          this.router.navigate(['courses']);
        } else {
          throw new Error('Invalid login or password')
        }
      },
    )

  }

  private getUserFromServer(login: string, password: string): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${BASE_URL}/users?login=${login}&password=${password}`);
  }

  public logout() {
    this.usersStorage.clear();
    // this.currentUserLogin = '';
  }

  public isAuth(): boolean {
    console.log('***', this.getUserInfo(this.currentUser.login))
    return this.getUserInfo(this.currentUser.login) ? true : false
  }

  public getUserInfo(loginName: string) {
    const userInfo = this.usersStorage.getItem(loginName)

    if (userInfo) {
      return JSON.parse(userInfo);
    } else {
      console.log('Invalid login');
      return null
    }
  }
}
