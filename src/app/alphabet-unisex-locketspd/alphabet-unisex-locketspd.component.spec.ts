import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetUnisexLocketspdComponent } from './alphabet-unisex-locketspd.component';

describe('AlphabetUnisexLocketspdComponent', () => {
  let component: AlphabetUnisexLocketspdComponent;
  let fixture: ComponentFixture<AlphabetUnisexLocketspdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetUnisexLocketspdComponent]
    });
    fixture = TestBed.createComponent(AlphabetUnisexLocketspdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
