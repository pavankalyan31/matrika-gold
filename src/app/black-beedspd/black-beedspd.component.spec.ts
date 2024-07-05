import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBeedspdComponent } from './black-beedspd.component';

describe('BlackBeedspdComponent', () => {
  let component: BlackBeedspdComponent;
  let fixture: ComponentFixture<BlackBeedspdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackBeedspdComponent]
    });
    fixture = TestBed.createComponent(BlackBeedspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
