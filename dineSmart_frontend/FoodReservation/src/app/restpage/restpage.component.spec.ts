import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestpageComponent } from './restpage.component';

describe('RestpageComponent', () => {
  let component: RestpageComponent;
  let fixture: ComponentFixture<RestpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
