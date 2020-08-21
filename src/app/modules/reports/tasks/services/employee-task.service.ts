import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeTaskService {
  constructor(private httpClient: HttpClient) {}

  getAll(
    employeeId?: number,
    customerId?: number,
    projectId?: number,
    projectStageId?: number,
    activityCategoryId?: number,
    activitySubcategoryId?: number
  ) {
    let link = 'http://192.168.137.148:9090/api/reports/tasks';

    if (employeeId) {
      link += '&employeeId=' + employeeId;
    }

    if (projectId) {
      link += '&projectId=' + projectId;
    }

    if (customerId) {
      link += '&customerId=' + customerId;
    }

    if (projectStageId) {
      link += '&projectStageId=' + projectStageId;
    }

    if (activityCategoryId) {
      link += '&activityCategoryId=' + activityCategoryId;
    }

    if (activitySubcategoryId) {
      link += '&activitySubcategoryId=' + activitySubcategoryId;
    }

    if (
      employeeId ||
      customerId ||
      projectId ||
      projectStageId ||
      activityCategoryId ||
      activitySubcategoryId
    ) {
      link = link.replace('tasks&', 'tasks?');
    }

    console.log(link);

    return this.httpClient.get(link);
  }
}
