import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCustomers from './state/customer.reducer';
import * as CustomerActions from './state/customer.actions';
import { Customer } from './state/customer.model';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDialogComponent } from './components/customer-dialog/customer-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {

  constructor(
    private store: Store<fromCustomers.State>,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.dispatch(CustomerActions.getCustomers());
  }
}
