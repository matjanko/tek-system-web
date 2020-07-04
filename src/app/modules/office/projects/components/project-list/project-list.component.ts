import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../../state/project.model';
import { Subscription } from 'rxjs';
import * as fromProjects from '../../state/project.reducer';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less'],
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projects: Array<Project>;

  columns = [
    { field: 'index', header: 'Numer projektu' },
    { field: 'customer', header: 'Zleceniodawca' },
    { field: 'nazwa', header: 'Nazwa projektu' },
  ];

  private subscriptions = new Subscription();

  constructor(private store: Store<fromProjects.State>) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.store
        .pipe(
          select((state) => state.projectState.projects),
          filter((projects) => projects != null)
        )
        .subscribe((projects: Array<Project>) => {
          this.projects = projects;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
