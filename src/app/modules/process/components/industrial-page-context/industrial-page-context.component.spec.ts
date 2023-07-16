import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialPageContextComponent } from './industrial-page-context.component';

describe('IndustrialPageContextComponent', () => {
  let component: IndustrialPageContextComponent;
  let fixture: ComponentFixture<IndustrialPageContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialPageContextComponent]
    });
    fixture = TestBed.createComponent(IndustrialPageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
