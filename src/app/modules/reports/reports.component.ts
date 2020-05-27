import { Component, OnInit } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { SidebarItem } from 'src/app/core/sidebar/models/sidebar-item';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.less']
})
export class ReportsComponent implements OnInit {

  sidebarItems: Array<SidebarItem> = Array(
    {
      icon: faChartBar,
      routerLink: "/reports/projects",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: true},
      tooltip: 'Podsumowanie projektów'
    },
    {
      icon: faBuilding,
      routerLink: "/reports/project",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: false},
      tooltip: 'Raport z projektu'
    },
  )

  faBuilding = faBuilding;
  faChartBar = faChartBar;

  constructor() { }

  ngOnInit(): void {
  }

}
