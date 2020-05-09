import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.less']
})
export class CustomerFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CustomerFormComponent>) { }

  ngOnInit(): void {
  }

  onCancelButtonClick() {
    this.dialogRef.close();
  }
}
