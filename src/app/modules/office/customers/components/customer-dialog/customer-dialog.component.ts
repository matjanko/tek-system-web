import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../../state/customer.model';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.less']
})
export class CustomerDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Customer
  ) { }

  ngOnInit(): void {
  }

}
