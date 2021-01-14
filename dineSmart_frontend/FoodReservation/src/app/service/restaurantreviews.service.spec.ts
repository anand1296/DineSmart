import { TestBed } from '@angular/core/testing';

import { RestaurantreviewsService } from './restaurantreviews.service';

describe('RestaurantreviewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantreviewsService = TestBed.get(RestaurantreviewsService);
    expect(service).toBeTruthy();
  });
});
