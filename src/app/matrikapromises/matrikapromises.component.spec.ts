import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrikapromisesComponent } from './matrikapromises.component';

describe('MatrikapromisesComponent', () => {
  let component: MatrikapromisesComponent;
  let fixture: ComponentFixture<MatrikapromisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatrikapromisesComponent]
    });
    fixture = TestBed.createComponent(MatrikapromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
