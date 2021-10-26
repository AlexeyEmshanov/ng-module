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
  public selectedCourse?: ICourse

  constructor(private coursesService: CoursesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICourse> {
    console.log('start resolver', Number(route.params.id));
    // let selectedCourse
    this.coursesService.getCourseById(Number(route.params.id))
      .subscribe(
        (response: ICourse) => {
          console.log('inside subscribe response', response)
          this.selectedCourse = response
          console.log('inside subscribe selected course', this.selectedCourse)
          // return of(this.selectedCourse);
        },

    )

      console.log('outside subscribe selected course', this.selectedCourse)
      if (this.selectedCourse) {
        return of(this.selectedCourse)
      } else {
        // this.router.navigate(['**']);
        return EMPTY;
      }

    // const selectedCourse = this.coursesService.getCourseById(Number(route.params.id))[0];
  }
}
