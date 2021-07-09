import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { AuthFacade } from '../+state/auth.facade';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authFacade: AuthFacade, 
    private readonly router: Router
  ) { }

  canActivate() {

    return this.authFacade.token$.pipe(
      map(token => {
        if(!token) {
          this.router.navigate(['/login'])
          return false
        }
             
        return true
      }),
      take(1)
    )
    
    return true;
  }
}