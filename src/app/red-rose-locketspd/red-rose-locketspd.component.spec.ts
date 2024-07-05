import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedRoseLocketspdComponent } from './red-rose-locketspd.component';

describe('RedRoseLocketspdComponent', () => {
  let component: RedRoseLocketspdComponent;
  let fixture: ComponentFixture<RedRoseLocketspdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedRoseLocketspdComponent]
    });
    fixture = TestBed.createComponent(RedRoseLocketspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
