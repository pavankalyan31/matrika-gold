import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheModernLocketpdComponent } from './the-modern-locketpd.component';

describe('TheModernLocketpdComponent', () => {
  let component: TheModernLocketpdComponent;
  let fixture: ComponentFixture<TheModernLocketpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheModernLocketpdComponent]
    });
    fixture = TestBed.createComponent(TheModernLocketpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
