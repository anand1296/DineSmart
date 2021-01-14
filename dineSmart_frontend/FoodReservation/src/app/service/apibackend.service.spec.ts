import { TestBed } from '@angular/core/testing';

import { APIBackendService } from './apibackend.service';

describe('APIBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIBackendService = TestBed.get(APIBackendService);
    expect(service).toBeTruthy();
  });
});
