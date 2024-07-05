import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JhumkaComponent } from './jhumka.component';

describe('JhumkaComponent', () => {
  let component: JhumkaComponent;
  let fixture: ComponentFixture<JhumkaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JhumkaComponent]
    });
    fixture = TestBed.createComponent(JhumkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
