import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../../state/project.model';
import { Subscription } from 'rxjs';
import * as fromProjects from '../../state/project.reducer';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { SelectItem } from 'primeng/api';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less'],
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projects: Array<Project>;
  customerNames: SelectItem[] = new Array();

  columns = [
    { field: 'index', header: 'Numer projektu' },
    { field: 'customer', header: 'Zleceniodawca' },
    { field: 'name', header: 'Nazwa projektu' },
  ];

  private subscriptions = new Subscription();

  constructor(
    private store: Store<fromProjects.State>,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.store
        .pipe(
          select((state) => state.projectState.projects),
          filter((projects) => projects != null)
        )
        .subscribe((projects: Array<Project>) => {
          this.projects = projects;
          this.subscriptions.add(
            this.dictionaryService
              .getCustomerNames()
              .subscribe((resp: Array<string>) => {
                resp.forEach((x) => {
                  this.customerNames.push({
                    label: x,
                    value: x,
                  });
                });
              })
          );
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
