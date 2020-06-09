import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  columns = [
    'customerName',
    'customerId'
  ]

  customers: Array<Customer>;
  dataSource: MatTableDataSource<Customer>;
  isLoading: boolean = true;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.customerService.getAll().subscribe((resp: Array<Customer>) => {
      this.customers = resp;
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

}
