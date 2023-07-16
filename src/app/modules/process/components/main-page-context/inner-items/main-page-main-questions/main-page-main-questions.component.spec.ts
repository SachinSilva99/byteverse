import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainQuestionsComponent } from './main-page-main-questions.component';

describe('MainPageMainQuestionsComponent', () => {
  let component: MainPageMainQuestionsComponent;
  let fixture: ComponentFixture<MainPageMainQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageMainQuestionsComponent]
    });
    fixture = TestBed.createComponent(MainPageMainQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
