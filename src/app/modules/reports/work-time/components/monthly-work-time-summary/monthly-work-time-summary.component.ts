import { Component, OnInit, Input } from '@angular/core';
import { MonthlyWorkTime } from '../../models/monthly-work-time';

@Component({
  selector: 'app-monthly-work-time-summary',
  templateUrl: './monthly-work-time-summary.component.html',
  styleUrls: ['./monthly-work-time-summary.component.less'],
})
export class MonthlyWorkTimeSummaryComponent implements OnInit {
  @Input() selectedMonthlyWorkTime: MonthlyWorkTime;
  @Input() selectedDate: Date;

  constructor() {}

  ngOnInit(): void {}
}
