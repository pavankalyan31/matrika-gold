import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JBalispdComponent } from './jbalispd.component';

describe('JBalispdComponent', () => {
  let component: JBalispdComponent;
  let fixture: ComponentFixture<JBalispdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JBalispdComponent]
    });
    fixture = TestBed.createComponent(JBalispdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
