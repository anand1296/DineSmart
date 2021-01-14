import { TestBed } from '@angular/core/testing';

import { BookinginfoService } from './bookinginfo.service';

describe('BookinginfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookinginfoService = TestBed.get(BookinginfoService);
    expect(service).toBeTruthy();
  });
});
