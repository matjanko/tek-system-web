import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MonthlyWorkTimeService {
  constructor(private httpClient: HttpClient) {}

  getAllByYearAndMonth(year: string, month: string) {
    return this.httpClient
      .get(
        'http://192.168.137.148:9090/api/work-time/all/year/' +
          year +
          '/month/' +
          month
      )
      .toPromise();
  }
}
