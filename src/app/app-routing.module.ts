import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { ProjectEffortComponent } from './modules/reports/project-effort/project-effort.component';
import { OfficeComponent } from './modules/office/office.component';
import { WorkTimeComponent } from './modules/reports/work-time/work-time.component';
import { ProjectsComponent } from './modules/office/projects/projects.component';
import { CustomersComponent } from './modules/office/customers/customers.component';
import { EmployeesComponent } from './modules/office/employees/employees.component';
import { CustomerDialogAddComponent } from './modules/office/customers/components/customer-dialog/customer-dialog-add.component';
import { MonthlyWorkTimeListComponent } from './modules/reports/work-time/components/monthly-work-time-list/monthly-work-time-list.component';
import { MonthlyWorkTimeSummaryComponent } from './modules/reports/work-time/components/monthly-work-time-summary/monthly-work-time-summary.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'office',
    component: OfficeComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
        children: [
          {
            path: 'new',
            component: CustomerDialogAddComponent,
          },
        ],
      },
      {
        path: 'employees',
        component: EmployeesComponent,
      },
    ],
  },
  {
    path: 'reports',
    component: ReportsComponent,
    children: [
      {
        path: 'projects',
        component: ProjectEffortComponent,
      },
      {
        path: 'work-time',
        component: WorkTimeComponent,
        children: [
          {
            path: 'year/:year/month/:month',
            component: MonthlyWorkTimeListComponent,
            children: [
              {
                path: 'employee/:employeeId',
                component: MonthlyWorkTimeSummaryComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
