import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JBalisComponent } from './jbalis.component';

describe('JBalisComponent', () => {
  let component: JBalisComponent;
  let fixture: ComponentFixture<JBalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JBalisComponent]
    });
    fixture = TestBed.createComponent(JBalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
