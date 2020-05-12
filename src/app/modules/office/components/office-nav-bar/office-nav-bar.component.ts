import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-nav-bar',
  templateUrl: './office-nav-bar.component.html',
  styleUrls: ['./office-nav-bar.component.less']
})
export class OfficeNavBarComponent implements OnInit {

  links = [
    {
      name: "Projekty",
      href: "/office/projects"
    },
    {
      name: "Kontrahenci",
      href: "/office/customers"
    },
    {
      name: "Pracownicy",
      href: "/office/employees"
    }
  ]

  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {

  }

}
