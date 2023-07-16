import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainPorfolioComponent } from './main-page-main-porfolio.component';

describe('MainPageMainPorfolioComponent', () => {
  let component: MainPageMainPorfolioComponent;
  let fixture: ComponentFixture<MainPageMainPorfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageMainPorfolioComponent]
    });
    fixture = TestBed.createComponent(MainPageMainPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
