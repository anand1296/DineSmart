import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmenuPage } from './foodmenu.page';

describe('FoodmenuPage', () => {
  let component: FoodmenuPage;
  let fixture: ComponentFixture<FoodmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodmenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
