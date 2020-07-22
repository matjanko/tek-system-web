import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeTaskService } from './services/employee-task.service';
import { EmployeeTask } from './models/employee-task';
import { LazyLoadEvent } from 'primeng/api';

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

  private subscriptions = new Subscription();

  constructor(private employeeTaskService: EmployeeTaskService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onShowResultsClick() {
    this.subscriptions.add(
      this.employeeTaskService
        .getAll()
        .subscribe((resp: Array<EmployeeTask>) => {
          this.employeeTasks = resp;
        })
    );
  }
}
