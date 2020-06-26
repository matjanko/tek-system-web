import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorkTimeService {
  constructor(private httpClient: HttpClient) {}

  getAllMonthlyWorkTimeByYearAndMonth(year: string, month: string) {
    return this.httpClient
      .get(
        'http://192.168.137.148:9090/api/work-time/monthly/all/year/' +
          year +
          '/month/' +
          month
      )
      .toPromise();
  }

  getAllDailyWorkTimeByYearAndMonthAndEmployeeId(
    year: string,
    month: string,
    employeeId: number
  ) {
    return this.httpClient
      .get(
        'http://192.168.137.148:9090/api/work-time/daily/all/year/' +
          year +
          '/month/' +
          month +
          '/employee/' +
          employeeId
      )
      .toPromise();
  }
}
