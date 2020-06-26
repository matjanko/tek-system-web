import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonthlyWorkTime } from '../../models/monthly-work-time';
import { Subscription, Observable } from 'rxjs';
import * as fromWorkTime from '../../state/work-time.reducer';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { WorkTimeService } from '../../services/work-time.service';
import { Router } from '@angular/router';
import * as WorkTimeActions from '../../state/work-time.actions';

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
    private workTimeService: WorkTimeService,
    private router: Router
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
          this.selectedMonthlyWorkTime = null;

          this.workTimeService
            .getAllMonthlyWorkTimeByYearAndMonth(
              date.getFullYear().toString(),
              this.getMonthString()
            )
            .then((workTimes: Array<MonthlyWorkTime>) => {
              this.monthlyWorkTimes = workTimes;
            });
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onRowSelect() {
    this.store.dispatch(
      WorkTimeActions.setSelectedMonthlyWorkTime({
        monthlyWorkTime: this.selectedMonthlyWorkTime,
      })
    );

    this.router.navigate([
      'reports',
      'work-time',
      'year',
      this.selectedDate.getFullYear(),
      'month',
      this.getMonthString(),
      'employee',
      this.selectedMonthlyWorkTime.employeeId,
    ]);
  }

  getMonthString(): string {
    let month = this.selectedDate?.getMonth() + 1;
    return month < 10 ? '0'.concat(month?.toString()) : month?.toString();
  }
}
