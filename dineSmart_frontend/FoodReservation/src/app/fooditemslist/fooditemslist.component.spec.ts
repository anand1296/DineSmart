import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemslistComponent } from './fooditemslist.component';

describe('FooditemslistComponent', () => {
  let component: FooditemslistComponent;
  let fixture: ComponentFixture<FooditemslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooditemslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooditemslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
