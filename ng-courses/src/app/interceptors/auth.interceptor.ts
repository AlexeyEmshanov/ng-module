import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getUserToken();

    if (authToken) {
      const authRequest = request.clone({ headers: request.headers.set('AuthToken', authToken as string)})
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
