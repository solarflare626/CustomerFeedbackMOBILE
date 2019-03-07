import { TestBed } from '@angular/core/testing';

import { OwnerAuthGuardService } from './owner-auth-guard.service';

describe('OwnerAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnerAuthGuardService = TestBed.get(OwnerAuthGuardService);
    expect(service).toBeTruthy();
  });
});
