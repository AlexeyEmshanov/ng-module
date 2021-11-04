import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoUserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuth().pipe(
      map( (result) => {
        if (result) {
          this.router.navigate(['courses']);
          return false;
        } else {
          return true;
        }
      })
    )
  }

}
