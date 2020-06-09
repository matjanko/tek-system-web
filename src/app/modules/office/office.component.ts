import { Component, OnInit } from '@angular/core';
import { SidebarItem } from 'src/app/core/sidebar/models/sidebar-item';
import { faUserClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.less']
})
export class OfficeComponent implements OnInit {

  sidebarItems: Array<SidebarItem> = Array(
    {
      icon: faUserClock,
      routerLink: "/office/projects",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: true},
      tooltip: 'Projekty'
    },
    {
      icon: faUserClock,
      routerLink: "/office/customers",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: false},
      tooltip: 'Zleceniodawcy'
    },
    {
      icon: faUserClock,
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
