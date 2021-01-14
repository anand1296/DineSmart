import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktablePage } from './booktable.page';

describe('BooktablePage', () => {
  let component: BooktablePage;
  let fixture: ComponentFixture<BooktablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
