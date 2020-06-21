import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { MonthlyWorkTime } from './models/monthly-work-time';
import { MonthlyWorkTimeService } from './services/monthly-work-time.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-work-time',
  templateUrl: './work-time.component.html',
  styleUrls: ['./work-time.component.less'],
})
export class WorkTimeComponent implements OnInit {
  dateForm = new FormGroup({
    date: new FormControl(new Date(), Validators.required),
  });

  monthlyWorkTimes: Array<MonthlyWorkTime>;

  pl = {
    monthNamesShort: [
      'sty',
      'lut',
      'mar',
      'kwi',
      'maj',
      'cze',
      'lip',
      'sie',
      'wrz',
      'paź',
      'lis',
      'gru',
    ],
  };

  columns = [
    { field: 'employeeName', header: 'Pracownik' },
    { field: 'hours', header: 'Godziny pracy' },
  ];

  private subscriptions = new Subscription();

  constructor(private monthlyWorkTimeService: MonthlyWorkTimeService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.monthlyWorkTimeService
        .getAllByYearAndMonth(
          this.getDate().getFullYear().toString(),
          this.getMonthString()
        )
        .subscribe((workTimes: Array<MonthlyWorkTime>) => {
          this.monthlyWorkTimes = workTimes;
        })
    );

    this.handleDate();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getMonthString(): string {
    let month = this.dateForm.controls.date.value.getMonth() + 1;
    return month < 10 ? '0'.concat(month.toString()) : month.toString();
  }

  getDate(): Date {
    return this.dateForm.controls.date.value;
  }

  private handleDate(): void {
    this.subscriptions.add(
      this.dateForm.controls.date.valueChanges
        .pipe(filter((date) => date != null))
        .subscribe((date: Date) => {
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
}
