import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.less']
})
export class OfficeComponent implements OnInit {

  constructor(
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  newProjectButtonClick(): void {

  }

  newCustomerButtonClick(): void {
    const dialogRef = this.dialog.open(CustomerFormComponent, this.getDialogConfig());
  }

  private getDialogConfig() : MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;

    return dialogConfig;
  }
}
