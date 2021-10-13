import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public selectedCourse?: ICourse;


  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit(): void {
    const selectedID = Number(this.activatedRoute.snapshot.params.id);
    this.selectedCourse = this.coursesService.getCourseById(selectedID)[0];
  }

}
