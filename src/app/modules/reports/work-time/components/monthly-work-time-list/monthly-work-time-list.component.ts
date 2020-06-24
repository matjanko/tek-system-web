import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonthlyWorkTime } from '../../models/monthly-work-time';
import { Subscription } from 'rxjs';
import * as fromWorkTime from '../../state/work-time.reducer';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { MonthlyWorkTimeService } from '../../services/monthly-work-time.service';

@Component({
  selector: 'app-monthly-work-time-list',
  templateUrl: './monthly-work-time-list.component.html',
  styleUrls: ['./monthly-work-time-list.component.less'],
})
export class MonthlyWorkTimeListComponent implements OnInit, OnDestroy {
  columns = [
    { field: 'employeeName', header: 'Pracownik' },
    { field: 'hours', header: 'Godziny pracy' },
  ];

  monthlyWorkTimes: Array<MonthlyWorkTime>;
  selectedMonthlyWorkTime: MonthlyWorkTime;
  selectedDate: Date;

  private subscriptions = new Subscription();

  constructor(
    private store: Store<fromWorkTime.State>,
    private monthlyWorkTimeService: MonthlyWorkTimeService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.store
        .pipe(
          select((state) => state.workTimeState.date),
          filter((date) => date != null)
        )
        .subscribe((date) => {
          this.selectedDate = date;
          this.subscriptions.add(
            this.monthlyWorkTimeService
              .getAllByYearAndMonth(
                date.getFullYear().toString(),
                this.getMonthString()
              )
              .subscribe((workTimes: Array<MonthlyWorkTime>) => {
                this.monthlyWorkTimes = workTimes;
              })
          );
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onRowSelect(event) {}

  getMonthString(): string {
    let month = this.selectedDate?.getMonth() + 1;
    return month < 10 ? '0'.concat(month?.toString()) : month?.toString();
  }
}
