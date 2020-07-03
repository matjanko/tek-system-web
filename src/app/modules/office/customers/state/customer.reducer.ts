import { Customer } from './customer.model';
import { createReducer, Action, on } from '@ngrx/store';
import * as CustomerActions from './customer.actions';
import * as fromRoot from '../../../../state/app.state';

export interface CustomerState {
  customers: Array<Customer>
}

export interface State extends fromRoot.State {
  customerState: CustomerState
}

export const initialState: CustomerState = {
  customers: null,
}

const customerReducer = createReducer(
  initialState,
  on(CustomerActions.setCustomers, (state, { customers }) => ({
    ...state,
    customers: customers
  })),
);

export function reducer(state: CustomerState | undefined, action: Action) {
  return customerReducer(state, action);
}
