import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PageTitleComponent } from './components/page-title/page-title.component';



@NgModule({
  declarations: [PageTitleComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PageTitleComponent
  ]
})
export class SharedModule { }
