import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [TableModule, DropdownModule, MultiSelectModule, CalendarModule],
})
export class PrimeNGModule {}
