import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyLocketspdComponent } from './fancy-locketspd.component';

describe('FancyLocketspdComponent', () => {
  let component: FancyLocketspdComponent;
  let fixture: ComponentFixture<FancyLocketspdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyLocketspdComponent]
    });
    fixture = TestBed.createComponent(FancyLocketspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
