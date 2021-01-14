import { TestBed } from '@angular/core/testing';

import { ReadyService } from './ready.service';

describe('ReadyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadyService = TestBed.get(ReadyService);
    expect(service).toBeTruthy();
  });
});
