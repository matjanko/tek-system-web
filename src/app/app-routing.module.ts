import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { ProjectEffortComponent } from './modules/reports/project-effort/project-effort.component';
import { OfficeComponent } from './modules/office/office.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'office',
    component: OfficeComponent
  },
  {
    path: 'reports',
    component: ReportsComponent,
    children: [
      {
        path: 'projects',
        component: ProjectEffortComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
