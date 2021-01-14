import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparedPage } from './prepared.page';

describe('PreparedPage', () => {
  let component: PreparedPage;
  let fixture: ComponentFixture<PreparedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
