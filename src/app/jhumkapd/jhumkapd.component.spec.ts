import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JhumkapdComponent } from './jhumkapd.component';

describe('JhumkapdComponent', () => {
  let component: JhumkapdComponent;
  let fixture: ComponentFixture<JhumkapdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JhumkapdComponent]
    });
    fixture = TestBed.createComponent(JhumkapdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
