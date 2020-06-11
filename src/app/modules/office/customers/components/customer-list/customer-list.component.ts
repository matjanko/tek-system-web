import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import * as fromCustomers from '../../state/customer.reducer';
import { Customer } from '../../state/customer.model';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  dataSource: MatTableDataSource<Customer>;
  columns: Array<string> = ['name']

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private store: Store<fromCustomers.State>) { }

  ngOnInit(): void {
    this.subscriptions.add(this.store.pipe(
      select(state => state.customerState.customers),
      filter(customers => customers != null))
      .subscribe((customers: Array<Customer>) => {
        this.dataSource = new MatTableDataSource(customers);
        this.dataSource.sort = this.sort;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
