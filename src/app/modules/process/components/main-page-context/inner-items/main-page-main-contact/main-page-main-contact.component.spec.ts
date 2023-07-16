import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainContactComponent } from './main-page-main-contact.component';

describe('MainPageMainContactComponent', () => {
  let component: MainPageMainContactComponent;
  let fixture: ComponentFixture<MainPageMainContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageMainContactComponent]
    });
    fixture = TestBed.createComponent(MainPageMainContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
