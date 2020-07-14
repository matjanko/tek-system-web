import { Component, OnInit } from '@angular/core';
import * as fromProjects from './state/project.reducer';
import * as ProjectActions from './state/project.actions';
import { Store } from '@ngrx/store';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private store: Store<fromProjects.State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ProjectActions.getProjects());
  }

  handleNewProjectClick() {
    console.log('Wciśnięto dodaj');
    this.router.navigate(['office', 'projects', 'new']);
  }

  handleEditProjectClick() {
    console.log('Wciśnięto edytuj');
  }
}
