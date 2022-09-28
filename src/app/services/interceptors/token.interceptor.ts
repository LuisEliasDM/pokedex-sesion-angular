import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Buffer } from 'Buffer'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN: string = Buffer.from(`${this.auth.username}:${this.auth.password}`).toString("base64");

    const HEADER_REQUEST: HttpRequest<any> = request.clone({
      headers: request.headers.set('Authorization', `Basic ${TOKEN}`)
    })
    
    return next.handle(HEADER_REQUEST);
  }
}
