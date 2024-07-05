import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopspdComponent } from './topspd.component';

describe('TopspdComponent', () => {
  let component: TopspdComponent;
  let fixture: ComponentFixture<TopspdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopspdComponent]
    });
    fixture = TestBed.createComponent(TopspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
