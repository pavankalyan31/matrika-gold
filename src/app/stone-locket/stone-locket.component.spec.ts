import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneLocketComponent } from './stone-locket.component';

describe('StoneLocketComponent', () => {
  let component: StoneLocketComponent;
  let fixture: ComponentFixture<StoneLocketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoneLocketComponent]
    });
    fixture = TestBed.createComponent(StoneLocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
