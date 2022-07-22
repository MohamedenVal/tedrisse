import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class SanctumInterceptor implements HttpInterceptor {

  constructor(private tokenService: LocalstorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const token = this.tokenService.getToken();
    const isAPIURL = request.url.startsWith(environment.apiUrl);

    if (token && isAPIURL) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }

    return next.handle(request);
  }
}
