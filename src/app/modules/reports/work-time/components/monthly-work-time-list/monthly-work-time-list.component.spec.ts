import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyWorkTimeListComponent } from './monthly-work-time-list.component';

describe('MonthlyWorkTimeListComponent', () => {
  let component: MonthlyWorkTimeListComponent;
  let fixture: ComponentFixture<MonthlyWorkTimeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyWorkTimeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyWorkTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
