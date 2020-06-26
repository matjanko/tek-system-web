import { Component, OnInit, Input } from '@angular/core';
import { MonthlyWorkTime } from '../../models/monthly-work-time';

@Component({
  selector: 'app-monthly-work-time-summary',
  templateUrl: './daily-work-time-list.component.html',
  styleUrls: ['./daily-work-time-list.component.less'],
})
export class DailyWorkTimeListComponent implements OnInit {
  @Input() selectedMonthlyWorkTime: MonthlyWorkTime;
  @Input() selectedDate: Date;

  constructor() {}

  ngOnInit(): void {}
}
