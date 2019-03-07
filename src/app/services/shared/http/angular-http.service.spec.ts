import { TestBed } from '@angular/core/testing';

import { AngularHttpService } from './angular-http.service';

describe('AngularHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularHttpService = TestBed.get(AngularHttpService);
    expect(service).toBeTruthy();
  });
});
