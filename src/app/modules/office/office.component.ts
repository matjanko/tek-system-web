import { Component, OnInit } from '@angular/core';
import { SidebarItem } from 'src/app/core/sidebar/models/sidebar-item';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.less']
})
export class OfficeComponent implements OnInit {

  sidebarItems: Array<SidebarItem> = Array(
    {
      icon: faBuilding,
      routerLink: "/office/projects",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: true},
      tooltip: 'Projekty'
    },
    {
      icon: faBriefcase,
      routerLink: "/office/customers",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: false},
      tooltip: 'Zleceniodawcy'
    },
    {
      icon: faUser,
      routerLink: "/office/employees",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: false},
      tooltip: 'Pracownicy'
    },
  )

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
}
