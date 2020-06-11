import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCustomers from './state/customer.reducer';
import * as CustomerActions from './state/customer.actions';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {

  constructor(private store: Store<fromCustomers.State>) { }

  ngOnInit(): void {
    this.store.dispatch(CustomerActions.getCustomers());
  }

}
