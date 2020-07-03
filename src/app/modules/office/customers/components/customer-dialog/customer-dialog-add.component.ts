import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDialogComponent } from './customer-dialog.component';


@Component({
  templateUrl: './customer-dialog.component.html',
})
export class CustomerDialogAddComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(CustomerDialogComponent, {

    })
  }

}
