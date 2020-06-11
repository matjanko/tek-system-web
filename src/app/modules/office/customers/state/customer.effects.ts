import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { CustomerService } from '../services/customer.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as CustomerActions from './customer.actions';
import { Customer } from './customer.model';

@Injectable()
export class CustomerEffects {

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}

  loadCustomers$ = createEffect(() => this.actions$.pipe(
    ofType(CustomerActions.getCustomers().type),
    mergeMap(() => this.customerService.getAll()
      .pipe(
        map((customers: Array<Customer>) => {
          return CustomerActions.setCustomers({ customers: customers })}),
        catchError(() => EMPTY)
      ))
  ));
}
