import { Component, OnInit, Input } from '@angular/core';
import { MonthlyWorkTime } from '../../models/monthly-work-time';
import { Subscription } from 'rxjs';
import { WorkTimeService } from '../../services/work-time.service';
import { DailyWorkTime } from '../../models/daily-work-time';
import * as fromWorkTime from '../../state/work-time.reducer';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-monthly-work-time-summary',
  templateUrl: './daily-work-time-list.component.html',
  styleUrls: ['./daily-work-time-list.component.less'],
})
export class DailyWorkTimeListComponent implements OnInit {
  @Input() selectedDate: Date;

  selectedMonthlyWorkTime: MonthlyWorkTime;

  columns = [
    { field: 'date', header: 'Data' },
    { field: 'hours', header: 'Czas pracy' },
  ];

  dailyWorkTimes: Array<DailyWorkTime>;

  private subscriptions = new Subscription();

  constructor(
    private store: Store<fromWorkTime.State>,
    private workTimeService: WorkTimeService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.store
        .pipe(
          select((state) => state.workTimeState.selectedMonthlyWorkTime),
          filter((workTime) => workTime != null)
        )
        .subscribe((workTime) => {
          this.selectedMonthlyWorkTime = workTime;
          this.workTimeService
            .getAllDailyWorkTimeByYearAndMonthAndEmployeeId(
              this.selectedDate.getFullYear().toString(),
              this.getMonthString(),
              workTime.employeeId
            )
            .then((workTimes: Array<DailyWorkTime>) => {
              this.dailyWorkTimes = workTimes;
            });
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getMonthString(): string {
    let month = this.selectedDate?.getMonth() + 1;
    return month < 10 ? '0'.concat(month?.toString()) : month?.toString();
  }
}
