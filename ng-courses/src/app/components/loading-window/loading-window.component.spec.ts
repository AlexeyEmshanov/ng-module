import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

import { LoadingWindowComponent } from './loading-window.component';

describe('LoadingWindowComponent', () => {
  let component: LoadingWindowComponent;
  let fixture: ComponentFixture<LoadingWindowComponent>;
  let loadingWindowDebugEl: DebugElement;
  let loadingService: LoadingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingWindowComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingWindowComponent);
    component = fixture.componentInstance;
    loadingService = TestBed.inject(LoadingService);


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(loadingService).toBeTruthy();
  });

  it('isLoading should be false if loadingSubject from service emit false value', () => {
    loadingService.loadingSubject.next(false);
    component.ngOnInit();

    fixture.detectChanges();

    component.isLoading$?.subscribe(data => {
      expect(data).toBe(false);
    })
  });

  it('isLoading should be true if loadingSubject from service emit true value', () => {
    loadingService.loadingSubject.next(true);
    component.ngOnInit();

    fixture.detectChanges();

    component.isLoading$?.subscribe(data => {
      expect(data).toBe(true);
    })
  });

  it('loading window should appear if isLoading$ is true', () => {
    component.isLoading$ = of(true)

    fixture.detectChanges();

    component.isLoading$.subscribe(() => {
      fixture.detectChanges();
      loadingWindowDebugEl = fixture.debugElement.query(By.css('.loading-container'));
      expect(loadingWindowDebugEl).toBeDefined();
    })
  });

  it('loading window should not appear if isLoading$ is false', () => {
    component.isLoading$ = of(false)

    fixture.detectChanges();

    component.isLoading$.subscribe(() => {
      fixture.detectChanges();
      loadingWindowDebugEl = fixture.debugElement.query(By.css('.loading-container'));
      expect(loadingWindowDebugEl).toBeFalsy();
    })
  });
});
