import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from './models/sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  @Input() items: Array<SidebarItem>

  constructor() { }

  ngOnInit(): void {
  }
}
