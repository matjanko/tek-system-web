import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private httpClient: HttpClient) {}

  getCustomerNames() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/customers/names'
    );
  }
}
