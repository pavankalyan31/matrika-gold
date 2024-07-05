import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanglesComponent } from './bangles.component';

describe('BanglesComponent', () => {
  let component: BanglesComponent;
  let fixture: ComponentFixture<BanglesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanglesComponent]
    });
    fixture = TestBed.createComponent(BanglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
