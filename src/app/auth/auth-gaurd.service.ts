import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServService } from './auth-serv.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(private authService : AuthServService, private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['loginAdmin']);
    return false;

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['loginAdmin']);
    return false;
  }
}
