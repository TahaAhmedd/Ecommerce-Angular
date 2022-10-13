import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Auth/Auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private AuthService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const response = request.clone({
      headers: request.headers.set("token",this.AuthService.getToken()??"")
    })
    return next.handle(response);
  }
}
