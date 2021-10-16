import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumb: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit(): void {
    const selectedCourse = this.coursesService.getCourseById(Number(this.activatedRoute.snapshot.params.id))[0]
    if (selectedCourse) {
      this.breadcrumb = selectedCourse.title;
    }
  }
}
