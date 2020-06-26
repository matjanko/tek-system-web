import * as fromRoot from '../../../../state/app.state';
import * as WorkTimeActions from './work-time.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { MonthlyWorkTime } from '../models/monthly-work-time';

export interface WorkTimeState {
  date?: Date;
  selectedMonthlyWorkTime?: MonthlyWorkTime;
}

export interface State extends fromRoot.State {
  workTimeState: WorkTimeState;
}

export const initialState: WorkTimeState = {
  date: null,
  selectedMonthlyWorkTime: null,
};

const workTimeReducer = createReducer(
  initialState,
  on(WorkTimeActions.setDate, (state, { date }) => ({
    ...state,
    date: date,
  })),
  on(
    WorkTimeActions.setSelectedMonthlyWorkTime,
    (state, { monthlyWorkTime }) => ({
      ...state,
      selectedMonthlyWorkTime: monthlyWorkTime,
    })
  )
);

export function reducer(state: WorkTimeState | undefined, action: Action) {
  return workTimeReducer(state, action);
}
