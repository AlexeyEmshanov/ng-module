import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/Icourse';
import { COURSES } from 'src/app/model/mock-data';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = COURSES;

  public searchField: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  onSearchClick() {
    console.log(this.searchField);
  }

}
