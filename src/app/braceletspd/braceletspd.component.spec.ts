import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletspdComponent } from './braceletspd.component';

describe('BraceletspdComponent', () => {
  let component: BraceletspdComponent;
  let fixture: ComponentFixture<BraceletspdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BraceletspdComponent]
    });
    fixture = TestBed.createComponent(BraceletspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
