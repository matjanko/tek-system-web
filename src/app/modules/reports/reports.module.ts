import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectEffortComponent } from './project-effort/project-effort.component';



@NgModule({
  declarations: [
    ReportsComponent,
    ProjectEffortComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ]
})
export class ReportsModule { }
