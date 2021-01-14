import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuItemPage } from './edit-menu-item.page';

describe('EditMenuItemPage', () => {
  let component: EditMenuItemPage;
  let fixture: ComponentFixture<EditMenuItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
