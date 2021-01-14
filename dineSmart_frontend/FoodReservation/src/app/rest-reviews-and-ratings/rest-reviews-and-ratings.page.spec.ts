import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestReviewsAndRatingsPage } from './rest-reviews-and-ratings.page';

describe('RestReviewsAndRatingsPage', () => {
  let component: RestReviewsAndRatingsPage;
  let fixture: ComponentFixture<RestReviewsAndRatingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestReviewsAndRatingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestReviewsAndRatingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
