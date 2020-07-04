import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProjectService } from '../services/project.service';
import * as ProjectsActions from './project.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Project } from './project.model';
import { EMPTY } from 'rxjs';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.getProjects().type),
      mergeMap(() =>
        this.projectService.getAll().pipe(
          map((projects: Array<Project>) => {
            return ProjectsActions.setProjects({ projects: projects });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
