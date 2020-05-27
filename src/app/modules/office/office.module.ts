import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office.component';
import { MaterialModule } from 'src/app/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [OfficeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule
  ],
  exports: [
    OfficeComponent
  ]
})
export class OfficeModule { }
