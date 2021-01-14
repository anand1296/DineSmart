import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServedPage } from './served.page';

describe('ServedPage', () => {
  let component: ServedPage;
  let fixture: ComponentFixture<ServedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
