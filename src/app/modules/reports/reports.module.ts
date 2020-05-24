import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectEffortComponent } from './project-effort/project-effort.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    ReportsComponent,
    ProjectEffortComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    AppRoutingModule,
    FontAwesomeModule
  ]
})
export class ReportsModule { }
