import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/customers'
    );
  }

  getCustomerNames() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/customers/names'
    );
  }

  getProjectIndexes() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/projects/indexes'
    );
  }

  getEmployeeNames() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/employees'
    );
  }
}
