import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPagePage } from './exit-page.page';

describe('ExitPagePage', () => {
  let component: ExitPagePage;
  let fixture: ComponentFixture<ExitPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
