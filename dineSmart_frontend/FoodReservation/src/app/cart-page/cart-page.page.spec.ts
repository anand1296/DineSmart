import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPagePage } from './cart-page.page';

describe('CartPagePage', () => {
  let component: CartPagePage;
  let fixture: ComponentFixture<CartPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
