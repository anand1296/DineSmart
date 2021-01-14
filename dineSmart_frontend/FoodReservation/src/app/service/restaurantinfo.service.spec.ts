import { TestBed } from '@angular/core/testing';

import { RestaurantinfoService } from './restaurantinfo.service';

describe('RestaurantinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantinfoService = TestBed.get(RestaurantinfoService);
    expect(service).toBeTruthy();
  });
});
