import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklacepdComponent } from './necklacepd.component';

describe('NecklacepdComponent', () => {
  let component: NecklacepdComponent;
  let fixture: ComponentFixture<NecklacepdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NecklacepdComponent]
    });
    fixture = TestBed.createComponent(NecklacepdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
