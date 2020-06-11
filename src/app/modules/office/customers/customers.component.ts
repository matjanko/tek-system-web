import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {

  customers = Array<Customer>();
  isLoading: boolean;

  constructor() { }

  ngOnInit(): void {

  }

}
