import { TestBed } from '@angular/core/testing';

import { ProjectEffortService } from './project-effort.service';

describe('ProjectEffortService', () => {
  let service: ProjectEffortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectEffortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
