import { TestBed } from '@angular/core/testing';

import { CheckMobileService } from './check-mobile.service';

describe('CheckMobileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckMobileService = TestBed.get(CheckMobileService);
    expect(service).toBeTruthy();
  });
});
