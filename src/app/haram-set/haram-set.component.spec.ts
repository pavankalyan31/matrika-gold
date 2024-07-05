import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaramSetComponent } from './haram-set.component';

describe('HaramSetComponent', () => {
  let component: HaramSetComponent;
  let fixture: ComponentFixture<HaramSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaramSetComponent]
    });
    fixture = TestBed.createComponent(HaramSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
