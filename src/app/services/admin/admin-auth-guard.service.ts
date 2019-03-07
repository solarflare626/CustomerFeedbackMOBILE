import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';
import { AdminAuthenticationService } from './admin-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(public auth: AdminAuthenticationService) { }

  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}
