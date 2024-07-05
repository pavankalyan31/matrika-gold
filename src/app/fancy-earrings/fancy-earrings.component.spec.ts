import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyEarringsComponent } from './fancy-earrings.component';

describe('FancyEarringsComponent', () => {
  let component: FancyEarringsComponent;
  let fixture: ComponentFixture<FancyEarringsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyEarringsComponent]
    });
    fixture = TestBed.createComponent(FancyEarringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
