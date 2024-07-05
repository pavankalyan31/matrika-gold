import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajuBandComponent } from './baju-band.component';

describe('BajuBandComponent', () => {
  let component: BajuBandComponent;
  let fixture: ComponentFixture<BajuBandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BajuBandComponent]
    });
    fixture = TestBed.createComponent(BajuBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
