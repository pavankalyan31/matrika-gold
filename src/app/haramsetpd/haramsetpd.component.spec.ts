import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaramsetpdComponent } from './haramsetpd.component';

describe('HaramsetpdComponent', () => {
  let component: HaramsetpdComponent;
  let fixture: ComponentFixture<HaramsetpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaramsetpdComponent]
    });
    fixture = TestBed.createComponent(HaramsetpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
