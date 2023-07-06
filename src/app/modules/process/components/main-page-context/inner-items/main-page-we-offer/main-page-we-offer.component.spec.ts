import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageWeOfferComponent } from './main-page-we-offer.component';

describe('MainPageWeOfferComponent', () => {
  let component: MainPageWeOfferComponent;
  let fixture: ComponentFixture<MainPageWeOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageWeOfferComponent]
    });
    fixture = TestBed.createComponent(MainPageWeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
