import { Component, OnInit } from '@angular/core';
import * as fromProjects from './state/project.reducer';
import * as ProjectActions from './state/project.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent implements OnInit {
  constructor(private store: Store<fromProjects.State>) {}

  ngOnInit(): void {
    this.store.dispatch(ProjectActions.getProjects());
  }
}
