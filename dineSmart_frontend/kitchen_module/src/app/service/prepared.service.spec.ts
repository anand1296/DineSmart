import { TestBed } from '@angular/core/testing';

import { PreparedService } from './prepared.service';

describe('PreparedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreparedService = TestBed.get(PreparedService);
    expect(service).toBeTruthy();
  });
});
