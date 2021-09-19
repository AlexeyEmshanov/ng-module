import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/interfaces/iuser';
import { testUser } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],

})
export class LoginPageComponent implements OnInit {
  @Input() public userLogin?: string;

  @Input() public userPassword?: string;

  private user?: IUser;

  constructor(public authService: AuthService) {

  }

  ngOnInit(): void {
    this.user = testUser
  }

  public onLoginClick() {
    this.authService.login('admin', JSON.stringify(this.user));
    console.log('logged in successfully by admim')
    console.log('User inputs:', this.userLogin, this.userPassword);
  }

}
