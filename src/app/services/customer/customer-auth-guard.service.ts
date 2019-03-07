import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';
import { CustomerAuthenticationService } from './customer-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuardService implements CanActivate {

  constructor(public auth: CustomerAuthenticationService) { }

  canActivate(): boolean {
    console.log("auth check");
    return this.auth.isAuthenticated();
  }
}
