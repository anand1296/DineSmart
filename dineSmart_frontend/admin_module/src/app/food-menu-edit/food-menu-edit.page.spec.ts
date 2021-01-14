import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuEditPage } from './food-menu-edit.page';

describe('FoodMenuEditPage', () => {
  let component: FoodMenuEditPage;
  let fixture: ComponentFixture<FoodMenuEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMenuEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
