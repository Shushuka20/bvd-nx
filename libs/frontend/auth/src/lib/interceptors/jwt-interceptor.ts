import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JWT } from '../domain/auth.models';
import { AuthFacade } from '../+state/auth.facade';
import { first, mergeMap } from 'rxjs/operators';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private readonly authFacade: AuthFacade) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return this.authFacade.token$.pipe(
      first(),
      mergeMap(token => {
        const authReq = !!token ? req.clone({
          setHeaders: { Authorization: 'Bearer ' + token }
        }) : req

        return next.handle(authReq)
      })
    )

    


  }
}