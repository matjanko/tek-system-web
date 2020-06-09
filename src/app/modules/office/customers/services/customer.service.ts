import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  link: "/customers"

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get("http://192.168.137.148:9090/api/customers");
  }
}
