import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../model/interfaces/iuser';
import { User } from '../model/user';
import { AppSettings } from '../app.settings';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  public login(login: string, password: string): void {
    this.getUserFromServer(login, password).subscribe(
      (resp : IUser[]) => {
        if (resp.length !== 0) {
          window.localStorage.setItem(login, JSON.stringify(resp[0]));
          this.router.navigate(['courses']);
        }
      },
    )
  }


  public getUserFromServer(login: string, password: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(AppSettings.BASE_URL + `/users?login=${login}&password=${password}`);
  }


  public logout() {
    window.localStorage.clear();
  }


  public isAuth(): boolean {
    return (this.getUserInfo()) ? true : false
  }


  public getUserInfo(): string | null {
    const login = localStorage.key(0)
    const userInfo = localStorage.getItem(login as string);

    if (userInfo) {
      return JSON.parse(userInfo).name.first;
    } else {
      console.log('User is not login');
      return null
    }
  }


  public getUserToken(): string | null{
    const login = localStorage.key(0);
    const userObj = window.localStorage.getItem(login as string);

    if (userObj) {
      return JSON.parse(userObj).fakeToken;
    } else {
      console.log('Auth token for user is unknown')
      return null;
    }
  }
}
