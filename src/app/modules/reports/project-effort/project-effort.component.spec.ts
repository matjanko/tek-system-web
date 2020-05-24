import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEffortComponent } from './project-effort.component';

describe('ProjectEffortComponent', () => {
  let component: ProjectEffortComponent;
  let fixture: ComponentFixture<ProjectEffortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEffortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEffortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
