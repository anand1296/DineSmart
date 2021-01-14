import { TestBed } from '@angular/core/testing';

import { InfoEditService } from './info-edit.service';

describe('InfoEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoEditService = TestBed.get(InfoEditService);
    expect(service).toBeTruthy();
  });
});
