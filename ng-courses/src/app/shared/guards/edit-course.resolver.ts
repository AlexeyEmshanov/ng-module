import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, empty, Observable, of } from 'rxjs';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class EditCourseResolver implements Resolve<ICourse> {
  constructor(private coursesService: CoursesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICourse> {
    const selectedCourse = this.coursesService.getCourseById(Number(route.params.id))[0];

    if (selectedCourse) {
      return of(selectedCourse)
    } else {
      this.router.navigate(['**']);
      return EMPTY;
    }
  }
}
