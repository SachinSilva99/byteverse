import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainAboutComponent } from './main-page-main-about.component';

describe('MainPageMainAboutComponent', () => {
  let component: MainPageMainAboutComponent;
  let fixture: ComponentFixture<MainPageMainAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageMainAboutComponent]
    });
    fixture = TestBed.createComponent(MainPageMainAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
