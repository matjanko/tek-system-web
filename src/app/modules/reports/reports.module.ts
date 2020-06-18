import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectEffortComponent } from './project-effort/project-effort.component';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { WorkTimeComponent } from './work-time/work-time.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNGModule } from 'src/app/prime-ng.module';


@NgModule({
  declarations: [
    ReportsComponent,
    ProjectEffortComponent,
    WorkTimeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    MaterialModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    PrimeNGModule
  ]
})
export class ReportsModule { }
