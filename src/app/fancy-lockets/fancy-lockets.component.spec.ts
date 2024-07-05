import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyLocketsComponent } from './fancy-lockets.component';

describe('FancyLocketsComponent', () => {
  let component: FancyLocketsComponent;
  let fixture: ComponentFixture<FancyLocketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyLocketsComponent]
    });
    fixture = TestBed.createComponent(FancyLocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
