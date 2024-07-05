import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyEarringspdComponent } from './fancy-earringspd.component';

describe('FancyEarringspdComponent', () => {
  let component: FancyEarringspdComponent;
  let fixture: ComponentFixture<FancyEarringspdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyEarringspdComponent]
    });
    fixture = TestBed.createComponent(FancyEarringspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
