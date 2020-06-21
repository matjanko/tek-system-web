import { TestBed } from '@angular/core/testing';

import { MonthlyWorkTimeService } from './monthly-work-time.service';

describe('MonthlyWorkTimeService', () => {
  let service: MonthlyWorkTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyWorkTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
