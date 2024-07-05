import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajubandpdComponent } from './bajubandpd.component';

describe('BajubandpdComponent', () => {
  let component: BajubandpdComponent;
  let fixture: ComponentFixture<BajubandpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BajubandpdComponent]
    });
    fixture = TestBed.createComponent(BajubandpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
