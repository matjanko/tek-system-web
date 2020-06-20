import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [TableModule, MultiSelectModule],
})
export class PrimeNGModule {}
