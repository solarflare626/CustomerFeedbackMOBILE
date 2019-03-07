import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';
import { OwnerAuthenticationService } from './owner-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class OwnerAuthGuardService implements CanActivate {

  constructor(public auth: OwnerAuthenticationService) { }

  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}
