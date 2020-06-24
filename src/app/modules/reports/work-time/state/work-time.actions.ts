import { createAction, props } from '@ngrx/store';

export const setDate = createAction(
  '[Work-Time] Set Date',
  props<{ date: Date }>()
);
