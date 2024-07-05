import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiquepdComponent } from './antiquepd.component';

describe('AntiquepdComponent', () => {
  let component: AntiquepdComponent;
  let fixture: ComponentFixture<AntiquepdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiquepdComponent]
    });
    fixture = TestBed.createComponent(AntiquepdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
