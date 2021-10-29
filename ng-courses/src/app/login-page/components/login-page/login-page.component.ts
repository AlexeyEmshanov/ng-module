import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/model/interfaces/iuser';
import { testUser } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],

})
export class LoginPageComponent {
  public userLogin?: string;

  public userPassword?: string;

  public user?: IUser;

  constructor(public authService: AuthService, private router: Router) {

  }

  // ngOnInit(): void {
  //   this.user = testUser
  // }

  public onLoginClick() {
    console.log('1', this.userLogin, this.userPassword);
    if ((this.userLogin) && (this.userPassword)) {
      console.log('2');
      this.authService.login(this.userLogin, this.userPassword);
    }
  }



}
