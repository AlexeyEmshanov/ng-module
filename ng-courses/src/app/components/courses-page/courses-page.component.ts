import { Component, OnInit } from '@angular/core';
// import ICourse from 'src/app/interfaces/icourse';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  // public courses: ICourse[];

  constructor() { }

  ngOnInit(): void {
    // this.courses = [
    //   {
    //     id: 1,
    //     title: 'Course 1',
    //     creationDate: '01.09.2021',
    //     duration: 120,
    //     description: 'course description ...',
    //   },
    //   {
    //     id: 2,
    //     title: 'Course 2',
    //     creationDate: '02.09.2021',
    //     duration: 150,
    //     description: 'course description ...',
    //   },
    //   {
    //     id: 3,
    //     title: 'Course 3',
    //     creationDate: '03.09.2021',
    //     duration: 180,
    //     description: 'course description ...',
    //   }
    // ]
  }

}
