import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/model/interfaces/iuser';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],

})
export class LoginPageComponent {
  // public userLogin?: string;

  // public userPassword?: string;

  public user?: IUser;

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(public authService: AuthService, private router: Router) {

  }

  // ngOnInit(): void {
  //   this.user = testUser
  // }

  // public onLoginClick() {
  //   console.log('1', this.userLogin, this.userPassword);
  //   if ((this.userLogin) && (this.userPassword)) {
  //     console.log('2');
  //     this.authService.login(this.userLogin, this.userPassword);
  //   }
  // }

  public onSubmit() {
    this.authService.login(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value);
  }

}
