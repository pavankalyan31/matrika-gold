import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedRoseLocketsComponent } from './red-rose-lockets.component';

describe('RedRoseLocketsComponent', () => {
  let component: RedRoseLocketsComponent;
  let fixture: ComponentFixture<RedRoseLocketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedRoseLocketsComponent]
    });
    fixture = TestBed.createComponent(RedRoseLocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
