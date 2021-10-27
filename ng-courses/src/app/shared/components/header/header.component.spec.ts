import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

import { HeaderComponent } from './header.component';
import { testUser } from 'src/app/model/user';

describe('HeaderComponent', () => {
  const testUser = 'admin'

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerElement: HTMLElement;
  let headerDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ AuthService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    headerDebugElement = fixture.debugElement;
    headerElement = headerDebugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('header after login should contain header control elements', () => {
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
