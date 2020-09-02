import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    TableModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    ToolbarModule,
    ButtonModule,
    CheckboxModule,
  ],
})
export class PrimeNGModule {}
