import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  isLoggedIn:boolean = false;
  constructor(private accountService:AccountService){ }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      this.accountService.isLoggedIn.subscribe(data => {
        this.isLoggedIn = data;
      });
    if (localStorage.getItem('token') != null && this.isLoggedIn){
      return of(true);
    }
    else {
      return of(true);
    }
  };
  
}
