import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinfoPage } from './editinfo.page';

describe('EditinfoPage', () => {
  let component: EditinfoPage;
  let fixture: ComponentFixture<EditinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
