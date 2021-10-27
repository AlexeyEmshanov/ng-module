import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';
import { NewCourse } from '../../model/newCourse';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent {
  public newCourse = new Course(this.generateID(), '', '', false, new Date(), [{id: 0 , firstName: '', lastName: ''}], 0);

  constructor(private coursesService: CoursesService, private router: Router) { }

  // ngOnInit(): void {
  // }

  public onSaveClick() {
    this.coursesService.createCourse(this.newCourse).subscribe();
    this.router.navigate(['courses']);
  }

  public generateID() {
    return Math.floor(Math.random() * 100) + 1
  }
}
