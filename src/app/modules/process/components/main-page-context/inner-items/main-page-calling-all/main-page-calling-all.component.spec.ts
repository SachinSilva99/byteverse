import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCallingAllComponent } from './main-page-calling-all.component';

describe('MainPageCallingAllComponent', () => {
  let component: MainPageCallingAllComponent;
  let fixture: ComponentFixture<MainPageCallingAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageCallingAllComponent]
    });
    fixture = TestBed.createComponent(MainPageCallingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
