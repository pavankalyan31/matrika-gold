import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheModernLocketComponent } from './the-modern-locket.component';

describe('TheModernLocketComponent', () => {
  let component: TheModernLocketComponent;
  let fixture: ComponentFixture<TheModernLocketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheModernLocketComponent]
    });
    fixture = TestBed.createComponent(TheModernLocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
