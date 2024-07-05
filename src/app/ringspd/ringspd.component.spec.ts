import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingspdComponent } from './ringspd.component';

describe('RingspdComponent', () => {
  let component: RingspdComponent;
  let fixture: ComponentFixture<RingspdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RingspdComponent]
    });
    fixture = TestBed.createComponent(RingspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
