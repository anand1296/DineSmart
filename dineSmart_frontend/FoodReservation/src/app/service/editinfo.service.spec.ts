import { TestBed } from '@angular/core/testing';

import { EditinfoService } from './editinfo.service';

describe('EditinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditinfoService = TestBed.get(EditinfoService);
    expect(service).toBeTruthy();
  });
});
