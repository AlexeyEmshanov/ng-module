import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';
import { TEST_USER } from 'src/app/model/user';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let testUser = TEST_USER;

  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: AuthService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [ FormsModule, AppRoutingModule, HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ AuthService ]
    })
    .compileComponents();
    authService = TestBed.inject(AuthService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;

    authService = TestBed.inject(AuthService);

    window.localStorage.setItem(testUser.login, JSON.stringify(testUser));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make authService call with login method', () => {
    component.userLogin = 'admin'
    component.userPassword = '12345'

    component.onLoginClick();

    fixture.detectChanges();
    spyOn(authService, 'login');
    authService.login(component.userLogin, component.userPassword);
    // authService.login('admin', '12345')
    expect(authService.login).toHaveBeenCalled();
  })
});
