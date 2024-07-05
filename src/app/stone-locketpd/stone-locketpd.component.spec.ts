import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneLocketpdComponent } from './stone-locketpd.component';

describe('StoneLocketpdComponent', () => {
  let component: StoneLocketpdComponent;
  let fixture: ComponentFixture<StoneLocketpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoneLocketpdComponent]
    });
    fixture = TestBed.createComponent(StoneLocketpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
