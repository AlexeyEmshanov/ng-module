import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class EditCourseResolver implements Resolve<boolean> {
  constructor(private coursesService: CoursesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const selectedCourse = this.coursesService.getCourseById(Number(route.params.id))[0];

    if (selectedCourse) {
      return of(true);
    } else {
      this.router.navigate(['**']);
      return of(false);
    }
  }
}
