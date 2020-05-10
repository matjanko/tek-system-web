import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/app/core/contracts/model/customer';
import { CustomerService } from 'src/app/core/contracts/services/customer.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.less']
})
export class ProjectFormComponent implements OnInit {

  customers: Array<Customer> = new Array<Customer>();

  constructor(
    private dialog: MatDialogRef<ProjectFormComponent>,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe((
      data: Array<Customer>) => {
        console.log(data);
        this.customers = data;
      }
    )
  }

  onCancelButtonClick(): void {
    this.dialog.close();
  }
}
