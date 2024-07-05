import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanglespdComponent } from './banglespd.component';

describe('BanglespdComponent', () => {
  let component: BanglespdComponent;
  let fixture: ComponentFixture<BanglespdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanglespdComponent]
    });
    fixture = TestBed.createComponent(BanglespdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
