import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainTeamComponent } from './main-page-main-team.component';

describe('MainPageMainTeamComponent', () => {
  let component: MainPageMainTeamComponent;
  let fixture: ComponentFixture<MainPageMainTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageMainTeamComponent]
    });
    fixture = TestBed.createComponent(MainPageMainTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
