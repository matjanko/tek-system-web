import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { MaterialModule } from '../shared/material.module';
import { ProjectFormComponent } from './components/project-form/project-form.component';


@NgModule({
  declarations: [
    OfficeComponent,
    ProjectListComponent,
    CustomerFormComponent,
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class OfficeModule { }
