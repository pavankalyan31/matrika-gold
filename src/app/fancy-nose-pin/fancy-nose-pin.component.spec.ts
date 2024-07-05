import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyNosePinComponent } from './fancy-nose-pin.component';

describe('FancyNosePinComponent', () => {
  let component: FancyNosePinComponent;
  let fixture: ComponentFixture<FancyNosePinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyNosePinComponent]
    });
    fixture = TestBed.createComponent(FancyNosePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
