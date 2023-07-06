import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainPlanComponent } from './main-page-main-plan.component';

describe('MainPageMainPlanComponent', () => {
  let component: MainPageMainPlanComponent;
  let fixture: ComponentFixture<MainPageMainPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageMainPlanComponent]
    });
    fixture = TestBed.createComponent(MainPageMainPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
