import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestInfoEditPage } from './rest-info-edit.page';

describe('RestInfoEditPage', () => {
  let component: RestInfoEditPage;
  let fixture: ComponentFixture<RestInfoEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestInfoEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestInfoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
