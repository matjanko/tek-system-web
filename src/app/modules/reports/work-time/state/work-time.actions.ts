import { createAction, props } from '@ngrx/store';
import { MonthlyWorkTime } from '../models/monthly-work-time';

export const setDate = createAction(
  '[Work-Time] Set Date',
  props<{ date: Date }>()
);

export const setSelectedMonthlyWorkTime = createAction(
  '[Work-Time] Set Selected Monthly Work Time',
  props<{ monthlyWorkTime: MonthlyWorkTime }>()
);
