import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IUser } from '../model/interfaces/iuser';
import { AppSettings } from '../app.settings';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public getUserFromServer(login: string, password: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(AppSettings.BASE_URL + `/users?login=${login}&password=${password}`);
  }

  public logout() {
    window.localStorage.clear();
  }

  public isAuth(): Observable<boolean> {
    return this.getUserInfo().pipe(
      map((result) => (result !== null) ? true : false
    ))
  }

  public getUserInfo(): Observable<string | null> {
    const userInfo = localStorage.getItem('userState');

    if (userInfo) {
      return of(JSON.parse(userInfo).currentUser.name.first);
    } else {
      console.log('User is not login');
      return of(null)
    }
  }

  public getUserToken(): string | null{
    const userObj = window.localStorage.getItem('userState');

    if (userObj) {
      return JSON.parse(userObj).currentUser.fakeToken;
    } else {
      console.log('Auth token for user is unknown')
      return null;
    }
  }

}
