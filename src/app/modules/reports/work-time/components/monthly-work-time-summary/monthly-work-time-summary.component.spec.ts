import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyWorkTimeSummaryComponent } from './monthly-work-time-summary.component';

describe('MonthlyWorkTimeSummaryComponent', () => {
  let component: MonthlyWorkTimeSummaryComponent;
  let fixture: ComponentFixture<MonthlyWorkTimeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyWorkTimeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyWorkTimeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
