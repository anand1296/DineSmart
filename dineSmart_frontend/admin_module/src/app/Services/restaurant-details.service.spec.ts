import { TestBed } from '@angular/core/testing';

import { RestaurantDetailsService } from './restaurant-details.service';

describe('RestaurantDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantDetailsService = TestBed.get(RestaurantDetailsService);
    expect(service).toBeTruthy();
  });
});
