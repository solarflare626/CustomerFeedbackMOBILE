import { TestBed } from '@angular/core/testing';

import { OwnerAuthenticationService } from './owner-authentication.service';

describe('OwnerAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnerAuthenticationService = TestBed.get(OwnerAuthenticationService);
    expect(service).toBeTruthy();
  });
});
