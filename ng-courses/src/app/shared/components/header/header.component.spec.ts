import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

import { HeaderComponent } from './header.component';
import { TEST_USER } from 'src/app/model/user';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('HeaderComponent', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerElement: HTMLElement;
  let headerDebugElement: DebugElement;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ AuthService ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    headerDebugElement = fixture.debugElement;
    headerElement = headerDebugElement.nativeElement;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
    expect(component).toBeDefined();
  });

  it('header after login should contain header control elements', () => {
    spyOn(authService, 'isAuth').and.returnValue(of(true));

    fixture.detectChanges();

    const searchElement = headerDebugElement.query(By.css('.header-controls'));
    expect(searchElement).toBeDefined();

  });

  // it('header after logout should not contain header control elements', () => {
  //   component.onLogout(testUser);
  //   fixture.detectChanges();

  //   const searchElement = headerDebugElement.query(By.css('.header-controls'));
  //   expect(searchElement).toBeNull();
  // });
});
