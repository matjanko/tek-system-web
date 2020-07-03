import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as fromCustomers from '../../state/customer.reducer';
import { Customer } from '../../state/customer.model';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less'],
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Array<Customer>;

  columns = [{ field: 'name', header: 'Nazwa' }];

  private subscriptions = new Subscription();

  constructor(private store: Store<fromCustomers.State>) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.store
        .pipe(
          select((state) => state.customerState.customers),
          filter((customers) => customers != null)
        )
        .subscribe((customers: Array<Customer>) => {
          this.customers = customers;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
