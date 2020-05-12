import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { OfficeComponent } from './modules/office/office.component';
import { ProjectListComponent } from './modules/office/components/project-list/project-list.component';
import { CustomerListComponent } from './modules/office/components/customer-list/customer-list.component';
import { ProjectFormComponent } from './modules/office/components/project-form/project-form.component';
import { EmployeeListComponent } from './modules/office/components/employee-list/employee-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'office',
    component: OfficeComponent,
    children: [
      {
        path: 'projects',
        component: ProjectListComponent,
      },
      {
        path: 'customers',
        component: CustomerListComponent,
      },
      {
        path: 'employees',
        component: EmployeeListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
