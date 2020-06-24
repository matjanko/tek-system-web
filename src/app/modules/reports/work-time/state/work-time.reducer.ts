import * as fromRoot from '../../../../state/app.state';
import * as WorkTimeActions from './work-time.actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface WorkTimeState {
  date?: Date;
}

export interface State extends fromRoot.State {
  workTimeState: WorkTimeState;
}

export const initialState: WorkTimeState = {
  date: null,
};

const workTimeReducer = createReducer(
  initialState,
  on(WorkTimeActions.setDate, (state, { date }) => ({
    ...state,
    date: date,
  }))
);

export function reducer(state: WorkTimeState | undefined, action: Action) {
  return workTimeReducer(state, action);
}
