import { TestBed } from '@angular/core/testing';

import { ServedService } from './served.service';

describe('ServedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServedService = TestBed.get(ServedService);
    expect(service).toBeTruthy();
  });
});
