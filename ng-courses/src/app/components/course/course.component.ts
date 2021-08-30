import { Component, OnInit } from '@angular/core';
import ICourse from 'src/app/interfaces/icourse';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements ICourse {
  public id = 1;

  public title = 'Test 1';

  public creationDate = '01.09.2021';

  public duration = 120;

  public description = 'new course';

  constructor() {

  }

  ngOnInit(): void {

  }

}
