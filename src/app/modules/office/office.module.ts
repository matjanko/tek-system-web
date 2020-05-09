import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    OfficeComponent,
    ProjectListComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class OfficeModule { }
