import { createAction, props } from '@ngrx/store';
import { Customer } from './customer.model';

export const getCustomers = createAction(
  '[Customers] Get Customers'
)

export const setCustomers = createAction(
  '[Customers] Set Customers',
  props<{ customers: Array<Customer> }>()
);

