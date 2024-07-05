import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneNosePinComponent } from './stone-nose-pin.component';

describe('StoneNosePinComponent', () => {
  let component: StoneNosePinComponent;
  let fixture: ComponentFixture<StoneNosePinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoneNosePinComponent]
    });
    fixture = TestBed.createComponent(StoneNosePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
