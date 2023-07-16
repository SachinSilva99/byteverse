import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainClientsComponent } from './main-page-main-clients.component';

describe('MainPageMainClientsComponent', () => {
  let component: MainPageMainClientsComponent;
  let fixture: ComponentFixture<MainPageMainClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageMainClientsComponent]
    });
    fixture = TestBed.createComponent(MainPageMainClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
