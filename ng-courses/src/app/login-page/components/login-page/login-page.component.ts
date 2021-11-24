import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/model/interfaces/iuser';
import { AuthService } from 'src/app/services/auth.service';
import * as UsersActions from './../../../core/+store/users/users.actions'



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],

})
export class LoginPageComponent {
  public user?: IUser;

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    public authService: AuthService,
    private router: Router,
    private store: Store

  ) {

  }

  // ngOnInit(): void {
  //   this.user = testUser
  // }

  public onSubmit() {
    // this.authService.login(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value);
    this.store.dispatch(UsersActions.loginUser({login: this.loginForm.get('login')?.value, password: this.loginForm.get('password')?.value}))
  }

}
