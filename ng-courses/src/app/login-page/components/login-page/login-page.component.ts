import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/interfaces/iuser';
import { testUser } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],

})
export class LoginPageComponent implements OnInit {
  public userLogin?: string;

  public userPassword?: string;

  private user?: IUser;

  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.user = testUser
  }

  public onLoginClick() {
    if ((this.userLogin === 'admin') && (this.userPassword === '12345')) {
      this.authService.currentUserLogin = this.userLogin;
      this.authService.login(this.userLogin, JSON.stringify(this.user));
      this.router.navigate(['courses']);
    } else {
      console.log('Incorret login and password pair. Plaese login!');
    }


    // this.authService.login('admin', JSON.stringify(this.user));
    // console.log('logged in successfully by admim')
    // console.log('User inputs:', this.userLogin, this.userPassword);
  }



}
