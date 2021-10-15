import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public selectedCourse: ICourse = {
    id: 0,
    title: '',
    description: '',
    courseDate: new Date(),
    duration: 0,
    topRated: false,
  }

  public courseAuthors = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private route: Router
  ) {  }

  ngOnInit(): void {
    const selectedID = Number(this.activatedRoute.snapshot.params.id);
    this.selectedCourse = this.coursesService.getCourseById(selectedID)[0];
  }

  public onSave() {
    this.coursesService.updateCourse(this.selectedCourse);
    this.route.navigate(['courses']);
  }

}
