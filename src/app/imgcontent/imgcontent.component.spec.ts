import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcontentComponent } from './imgcontent.component';

describe('ImgcontentComponent', () => {
  let component: ImgcontentComponent;
  let fixture: ComponentFixture<ImgcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgcontentComponent]
    });
    fixture = TestBed.createComponent(ImgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
