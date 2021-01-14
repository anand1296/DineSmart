import { TestBed } from '@angular/core/testing';

import { GetFoodMenuService } from './get-food-menu.service';

describe('GetFoodMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFoodMenuService = TestBed.get(GetFoodMenuService);
    expect(service).toBeTruthy();
  });
});
