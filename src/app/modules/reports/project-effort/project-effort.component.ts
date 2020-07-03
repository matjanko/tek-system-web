import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProjectEffort } from './models/project-effort';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { ProjectEffortService } from './services/project-effort.service';
import { Subscription } from 'rxjs';
import { SelectItem } from 'primeng/api';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { MultiSelectItem } from 'primeng/multiselect';

@Component({
  selector: 'app-project-effort',
  templateUrl: './project-effort.component.html',
  styleUrls: ['./project-effort.component.less'],
})
export class ProjectEffortComponent implements OnInit, OnDestroy {
  columns = [
    { field: 'projectSymbol', header: 'Numer' },
    { field: 'customerName', header: 'Zleceniodawca' },
    { field: 'projectName', header: 'Nazwa projektu' },
    { field: 'hours', header: 'Godziny' },
    { field: 'hasProgress', header: 'Postęp prac' },
  ];

  progress = [
    { label: 'Wszystkie', value: null },
    { label: 'TAK', value: true },
    { label: 'NIE', value: false },
  ];

  projectEfforts: Array<ProjectEffort>;
  faCircle = faCircle;
  customerNames: SelectItem[] = new Array();

  private subscriptions = new Subscription();

  constructor(
    private projectEffortService: ProjectEffortService,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.projectEffortService
        .getAll()
        .subscribe((resp: Array<ProjectEffort>) => {
          this.projectEfforts = resp;
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
    this.subscriptions?.unsubscribe();
  }
}
