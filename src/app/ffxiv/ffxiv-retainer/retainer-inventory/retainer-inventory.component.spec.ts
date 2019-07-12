import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetainerInventoryComponent } from './retainer-inventory.component';

describe('RetainerInventoryComponent', () => {
  let component: RetainerInventoryComponent;
  let fixture: ComponentFixture<RetainerInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetainerInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetainerInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
