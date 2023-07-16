import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCallActionComponent } from './main-page-call-action.component';

describe('MainPageCallActionComponent', () => {
  let component: MainPageCallActionComponent;
  let fixture: ComponentFixture<MainPageCallActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageCallActionComponent]
    });
    fixture = TestBed.createComponent(MainPageCallActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
