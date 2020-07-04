import { Project } from './project.model';
import * as fromRoot from '../../../../state/app.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as ProjectActions from './project.actions';

export interface ProjectState {
  projects: Array<Project>;
}

export interface State extends fromRoot.State {
  projectState: ProjectState;
}

export const initialState: ProjectState = {
  projects: null,
};

const projectReducer = createReducer(
  initialState,
  on(ProjectActions.setProjects, (state, { projects }) => ({
    ...state,
    projects: projects,
  }))
);

export function reducer(state: ProjectState | undefined, action: Action) {
  return projectReducer(state, action);
}
