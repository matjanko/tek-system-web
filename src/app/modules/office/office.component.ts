import { Component, OnInit } from '@angular/core';
import { SidebarItem } from 'src/app/core/sidebar/models/sidebar-item';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.less']
})
export class OfficeComponent implements OnInit {

  sidebarItems: Array<SidebarItem> = Array(
    {
      icon: null,
      routerLink: "/office/projects",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: true},
      tooltip: 'Projekty'
    },
    {
      icon: null,
      routerLink: "/office/customers",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: false},
      tooltip: 'Zleceniodawcy'
    },
    {
      icon: null,
      routerLink: "/office/employees",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: false},
      tooltip: 'Pracownicy'
    },
  )

  constructor() { }

  ngOnInit(): void {
  }

}
