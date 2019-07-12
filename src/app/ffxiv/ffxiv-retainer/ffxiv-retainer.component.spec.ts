import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfxivRetainerComponent } from './ffxiv-retainer.component';

describe('FfxivRetainerComponent', () => {
  let component: FfxivRetainerComponent;
  let fixture: ComponentFixture<FfxivRetainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfxivRetainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfxivRetainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
