import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyPage } from './ready.page';

describe('ReadyPage', () => {
  let component: ReadyPage;
  let fixture: ComponentFixture<ReadyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
