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
  // public currentUserData = new User(0, '', {first: '', last: ''}, '', '');

  private usersStorage = window.localStorage;

  constructor(private http: HttpClient, private router: Router) { }

  public login(login: string, password: string): void {
    this.getUserFromServer(login, password).subscribe(
      (resp) => {
        if (resp.length !== 0) {
          // this.currentUserData = resp[0];
          this.usersStorage.setItem(login, JSON.stringify(resp[0]));
          this.router.navigate(['courses']);
        } else {
          throw new Error('Invalid login or password')
        }
      },
    )
  }

  private getUserFromServer(login: string, password: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(AppSettings.BASE_URL + `/users?login=${login}&password=${password}`);
  }

  public logout() {
    this.usersStorage.clear();
  }

  public isAuth(): boolean {
    return (this.getUserInfo()) ? true : false
  }

  public getUserInfo(): string | null {
    const login = this.usersStorage.key(0)
    const userInfo = this.usersStorage.getItem(login as string);

    if (userInfo) {
      return JSON.parse(userInfo).name.first;
    } else {
      console.log('User is not login');
      return null
    }
  }
}
