import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable, Subject } from 'rxjs';
import { LodingServiceService } from './loding-service.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  
  constructor(private loadServe:LodingServiceService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadServe.showload()
    return next.handle(request).pipe(
      finalize(()=>{
        this.loadServe.hidelooding()
      })
    );
  }
}
