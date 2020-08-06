import { createAction, props } from '@ngrx/store';
import { Project } from './project.model';

export const getProjects = createAction('[Projects] Get Projects');

export const setProjects = createAction(
  '[Projects] Set Projects',
  props<{ projects: Array<Project> }>()
);
