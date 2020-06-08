import { Component, OnInit } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faUserClock } from '@fortawesome/free-solid-svg-icons';
import { SidebarItem } from 'src/app/core/sidebar/models/sidebar-item';
import { Router } from '@angular/router';

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
      icon: faUserClock,
      routerLink: "/reports/work-time",
      routerLinkActive: ['active'],
      routerLinkActiveOptions: { exact: false},
      tooltip: 'Czas pracy'
    },
  )

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['reports', 'projects']);
  }

}
