import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeTaskService } from './services/employee-task.service';
import { EmployeeTask } from './models/employee-task';
import { LazyLoadEvent, SelectItem } from 'primeng/api';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { EmployeeDictionary } from 'src/app/shared/models/dictionaries/employee-name';
import { CustomerDictionary } from 'src/app/shared/models/dictionaries/customer-dictionary';
import { ProjectDictionary } from 'src/app/shared/models/dictionaries/project-dictionary';

@Component({
  selector: 'app-full-report',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less'],
})
export class TasksComponent implements OnInit {
  columns = [
    { field: 'employeeName', header: 'Pracownik' },
    { field: 'projectNumber', header: 'Numer projektu' },
    { field: 'customerName', header: 'Zleceniodawca' },
    { field: 'projectName', header: 'Nazwa projektu' },
    { field: 'projectStageName', header: 'Stadium projektu' },
    { field: 'firstActivity', header: 'Kategoria' },
    { field: 'secondActivity', header: 'Czynność główna' },
    { field: 'thirdActivity', header: 'Element' },
    { field: 'software', header: 'Program' },
    { field: 'isAdditionalCost', header: 'Koszty' },
    { field: 'isMistake', header: 'Błędy' },
    { field: 'startTime', header: 'Start zadania' },
    { field: 'endTime', header: 'Koniec zadania' },
    { field: 'hours', header: 'Czas' },
  ];

  employeeTasks: Array<EmployeeTask>;

  employees: SelectItem[] = new Array();
  customers: SelectItem[] = new Array();
  projects: SelectItem[] = new Array();
  projectStages: SelectItem[] = new Array();

  selectedEmployeeId: number;
  selectedCustomerId: number;
  selectedProjectId: number;
  selectedProjectStageId: number;

  isCustomersDropdownDisabled: boolean;
  isProjectsDropdownDisabled: boolean;

  private subscriptions = new Subscription();

  constructor(
    private employeeTaskService: EmployeeTaskService,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit(): void {
    this.employees.push({ label: 'Wszyscy', value: '' });
    this.customers.push({ label: 'Wszyscy', value: '' });
    this.projects.push({ label: 'Wszystkie', value: '' });
    this.projectStages.push({ label: 'Wszystkie', value: '' });

    this.dictionaryService
      .getEmployeeNames()
      .subscribe((resp: Array<EmployeeDictionary>) => {
        resp.forEach((x) => {
          this.employees.push({
            label: x.name,
            value: x.id,
          });
        });
      });

    this.dictionaryService
      .getCustomers()
      .subscribe((resp: Array<CustomerDictionary>) => {
        resp.forEach((x) => {
          this.customers.push({
            label: x.name,
            value: x.id,
          });
        });
      });

    this.dictionaryService
      .getProjects()
      .subscribe((resp: Array<ProjectDictionary>) => {
        resp.forEach((x) => {
          this.projects.push({
            label: x.index
              .concat(' - ')
              .concat(x.customerName)
              .concat(' - ')
              .concat(x.name),
            value: x.id,
          });
        });
      });

    this.dictionaryService
      .getProjectStages()
      .subscribe((resp: Array<CustomerDictionary>) => {
        resp.forEach((x) => {
          this.projectStages.push({
            label: x.name,
            value: x.id,
          });
        });
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onShowResultsClick() {
    this.subscriptions.add(
      this.employeeTaskService
        .getAll(
          this.selectedEmployeeId,
          this.selectedCustomerId,
          this.selectedProjectId,
          this.selectedProjectStageId
        )
        .subscribe((resp: Array<EmployeeTask>) => {
          this.employeeTasks = resp;
        })
    );
  }

  onProjectsDropdownChange() {
    if (this.selectedProjectId) {
      this.isCustomersDropdownDisabled = true;
      this.selectedCustomerId = null;
    } else {
      this.isCustomersDropdownDisabled = false;
    }
  }

  onCustomersDropdownChange() {
    if (this.selectedCustomerId) {
      this.isProjectsDropdownDisabled = true;
      this.selectedProjectId = null;
    } else {
      this.isProjectsDropdownDisabled = false;
    }
  }
}
