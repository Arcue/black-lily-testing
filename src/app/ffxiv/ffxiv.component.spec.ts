import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfxivComponent } from './ffxiv.component';

describe('FfxivComponent', () => {
  let component: FfxivComponent;
  let fixture: ComponentFixture<FfxivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfxivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfxivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
