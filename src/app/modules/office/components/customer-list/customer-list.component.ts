import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/core/contracts/model/customer';
import { CustomerService } from 'src/app/core/contracts/services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less']
})

export class CustomerListComponent implements OnInit {
  customers: Array<Customer> = new Array<Customer>();
  dataSource: MatTableDataSource<Customer>;
  displayedColumns: Array<string> = ['name', 'created', 'createdBy'];


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private customerService: CustomerService
    ) { }

  ngOnInit(): void {

    this.customerService.getAll().subscribe((
      data: Array<Customer>) => {
        console.log(data);
        this.customers = data;
        this.dataSource = new MatTableDataSource(this.customers);
        this.dataSource.sort = this.sort;
      }
    )
  }
}
