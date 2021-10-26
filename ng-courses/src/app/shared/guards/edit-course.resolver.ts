import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, EmptyError, Observable, of } from 'rxjs';
import { ICourse } from 'src/app/model/interfaces/icourse';
import { CoursesService } from 'src/app/services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class EditCourseResolver implements Resolve<ICourse> {
  constructor(private coursesService: CoursesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICourse> {
    this.coursesService.getCourseById(Number(route.params.id))
      .subscribe({
        error: (error: Error) => {
          this.router.navigate(['**']);
          console.log('Course with such ID is absent', error);
        }
      })

    return this.coursesService.getCourseById(Number(route.params.id))
  }
}
