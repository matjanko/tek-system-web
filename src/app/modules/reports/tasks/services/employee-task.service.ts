import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeTaskService {
  constructor(private httpClient: HttpClient) {}

  getAll(employeeId?: number, customerId?: number) {
    let link = 'http://192.168.137.148:9090/api/reports/tasks';

    if (employeeId) {
      link += '&employeeId=' + employeeId;
    }

    if (customerId) {
      link += '&customerId=' + customerId;
    }

    if (employeeId || customerId) {
      link = link.replace('tasks&', 'tasks?');
    }

    console.log(link);

    return this.httpClient.get(link);
  }
}
