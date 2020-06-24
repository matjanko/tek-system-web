import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as fromWorkTime from './state/work-time.reducer';
import { Store, select } from '@ngrx/store';
import * as WorkTimeActions from './state/work-time.actions';

@Component({
  selector: 'app-work-time',
  templateUrl: './work-time.component.html',
  styleUrls: ['./work-time.component.less'],
})
export class WorkTimeComponent implements OnInit {
  dateForm = new FormGroup({
    date: new FormControl(null, Validators.required),
  });

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

  private subscriptions = new Subscription();

  constructor(
    private store: Store<fromWorkTime.State>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.store
        .pipe(
          select((state) => state.workTimeState.date),
          filter((date) => date != null)
        )
        .subscribe((date) => {
          this.dateForm.controls.date.setValue(date);
          this.store.dispatch(WorkTimeActions.setDate({ date: date }));
          this.redirectToDate(date);
        })
    );

    this.subscriptions.add(
      this.activatedRoute.firstChild?.params
        .pipe(first())
        .subscribe((params) => {
          let date = new Date(params['year'], params['month'] - 1);
          this.dateForm.controls.date.setValue(date);
          this.store.dispatch(WorkTimeActions.setDate({ date: date }));
        })
    );

    if (this.getDate() == null) {
      let date = new Date();
      this.dateForm.controls.date.setValue(date);
      this.store.dispatch(WorkTimeActions.setDate({ date: date }));
      this.redirectToDate(date);
    }

    this.subscriptions.add(
      this.dateForm.controls.date.valueChanges
        .pipe(filter((date) => date != null))
        .subscribe((date) => {
          this.store.dispatch(WorkTimeActions.setDate({ date: date }));
          this.redirectToDate(date);
        })
    );

    this.subscriptions.add(
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => route.firstChild),
          filter((route) => route != null),
          switchMap((route) => route.params)
        )
        .subscribe((params) => {
          let date = new Date(params['year'], params['month'] - 1);
          this.dateForm.controls.date.setValue(date);
          this.store.dispatch(WorkTimeActions.setDate({ date: date }));
        })
    );

    // this.subscriptions.add(
    //   this.monthlyWorkTimeService
    //     .getAllByYearAndMonth(
    //       this.getDate().getFullYear().toString(),
    //       this.getMonthString()
    //     )
    //     .subscribe((workTimes: Array<MonthlyWorkTime>) => {
    //       this.monthlyWorkTimes = workTimes;
    //     })
    // );
    // this.handleDate();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getDate(): Date {
    return this.dateForm.controls.date.value;
  }

  private redirectToDate(date: Date): void {
    this.router.navigate([
      'reports',
      'work-time',
      'year',
      date?.getFullYear(),
      'month',
      this.getMonthString(date),
    ]);
  }

  private getMonthString(date: Date): string {
    let month = date?.getMonth() + 1;
    return month < 10 ? '0'.concat(month?.toString()) : month?.toString();
  }
}
