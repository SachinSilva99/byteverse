import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainServicesComponent } from './main-page-main-services.component';

describe('MainPageMainServicesComponent', () => {
  let component: MainPageMainServicesComponent;
  let fixture: ComponentFixture<MainPageMainServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageMainServicesComponent]
    });
    fixture = TestBed.createComponent(MainPageMainServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
