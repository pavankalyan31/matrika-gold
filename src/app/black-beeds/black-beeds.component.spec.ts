import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBeedsComponent } from './black-beeds.component';

describe('BlackBeedsComponent', () => {
  let component: BlackBeedsComponent;
  let fixture: ComponentFixture<BlackBeedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackBeedsComponent]
    });
    fixture = TestBed.createComponent(BlackBeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
