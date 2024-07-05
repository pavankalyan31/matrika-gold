import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesofficeComponent } from './promisesoffice.component';

describe('PromisesofficeComponent', () => {
  let component: PromisesofficeComponent;
  let fixture: ComponentFixture<PromisesofficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromisesofficeComponent]
    });
    fixture = TestBed.createComponent(PromisesofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
