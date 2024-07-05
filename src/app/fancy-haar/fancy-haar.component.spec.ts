import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyHaarComponent } from './fancy-haar.component';

describe('FancyHaarComponent', () => {
  let component: FancyHaarComponent;
  let fixture: ComponentFixture<FancyHaarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyHaarComponent]
    });
    fixture = TestBed.createComponent(FancyHaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
