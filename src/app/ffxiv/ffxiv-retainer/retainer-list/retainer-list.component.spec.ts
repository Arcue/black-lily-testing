import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetainerListComponent } from './retainer-list.component';

describe('RetainerListComponent', () => {
  let component: RetainerListComponent;
  let fixture: ComponentFixture<RetainerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetainerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
