import { TestBed } from '@angular/core/testing';

import { FoodinfoService } from './foodinfo.service';

describe('FoodinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodinfoService = TestBed.get(FoodinfoService);
    expect(service).toBeTruthy();
  });
});
