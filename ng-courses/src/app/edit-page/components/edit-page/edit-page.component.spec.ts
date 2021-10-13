import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoursesService } from 'src/app/services/courses.service';

import { EditPageComponent } from './edit-page.component';

describe('EditPageComponent', () => {
  let component: EditPageComponent;
  let fixture: ComponentFixture<EditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPageComponent ],
      imports: [ AppRoutingModule, ActivatedRoute, CoursesService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
