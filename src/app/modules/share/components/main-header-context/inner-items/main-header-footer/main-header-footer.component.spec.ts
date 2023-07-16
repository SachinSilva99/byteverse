import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderFooterComponent } from './main-header-footer.component';

describe('MainHeaderFooterComponent', () => {
  let component: MainHeaderFooterComponent;
  let fixture: ComponentFixture<MainHeaderFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHeaderFooterComponent]
    });
    fixture = TestBed.createComponent(MainHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
