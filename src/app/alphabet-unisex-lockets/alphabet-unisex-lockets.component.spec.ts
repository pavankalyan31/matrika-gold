import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetUnisexLocketsComponent } from './alphabet-unisex-lockets.component';

describe('AlphabetUnisexLocketsComponent', () => {
  let component: AlphabetUnisexLocketsComponent;
  let fixture: ComponentFixture<AlphabetUnisexLocketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetUnisexLocketsComponent]
    });
    fixture = TestBed.createComponent(AlphabetUnisexLocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
