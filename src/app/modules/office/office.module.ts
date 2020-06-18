import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office.component';
import { MaterialModule } from 'src/app/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeesComponent } from './employees/employees.component';
import { CustomersComponent } from './customers/customers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerListComponent } from './customers/components/customer-list/customer-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromCustomers from './customers/state/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './customers/state/customer.effects';
import { CustomerDialogComponent } from './customers/components/customer-dialog/customer-dialog.component';
import { CustomerDialogAddComponent } from './customers/components/customer-dialog/customer-dialog-add.component';



@NgModule({
  declarations: [
    OfficeComponent,
    ProjectsComponent,
    EmployeesComponent,
    CustomersComponent,
    CustomerListComponent,
    CustomerDialogComponent,
    CustomerDialogAddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    StoreModule.forFeature('customerState', fromCustomers.reducer),
    EffectsModule.forFeature([CustomerEffects])
  ],
  exports: [
    OfficeComponent
  ]
})
export class OfficeModule { }
