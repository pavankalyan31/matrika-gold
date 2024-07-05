import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyhaarpdComponent } from './fancyhaarpd.component';

describe('FancyhaarpdComponent', () => {
  let component: FancyhaarpdComponent;
  let fixture: ComponentFixture<FancyhaarpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyhaarpdComponent]
    });
    fixture = TestBed.createComponent(FancyhaarpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
