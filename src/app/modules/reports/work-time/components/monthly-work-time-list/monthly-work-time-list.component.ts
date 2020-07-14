import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonthlyWorkTime } from '../../models/monthly-work-time';
import { Subscription, Observable } from 'rxjs';
import * as fromWorkTime from '../../state/work-time.reducer';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { WorkTimeService } from '../../services/work-time.service';
import { Router } from '@angular/router';
import * as WorkTimeActions from '../../state/work-time.actions';
import { MonthlyWorkTimeExport } from '../../models/monthly-work-time-export';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-monthly-work-time-list',
  templateUrl: './monthly-work-time-list.component.html',
  styleUrls: ['./monthly-work-time-list.component.less'],
})
export class MonthlyWorkTimeListComponent implements OnInit, OnDestroy {
  columns = [
    { field: 'employeeName', header: 'Pracownik' },
    { field: 'hours', header: 'Godziny' },
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

  getTableHeader() {
    return (
      'Godziny pracy za miesiąc ' +
      this.getMonthString() +
      '/' +
      this.selectedDate?.getFullYear()
    );
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      let monthlyWorkTimeExportList = new Array<MonthlyWorkTimeExport>();

      this.monthlyWorkTimes.forEach((element) => {
        monthlyWorkTimeExportList.push({
          Pracownik: element.employeeName.trim(),
          Czas: element.hours.toString().replace('.', ',').trim(),
        });
      });

      const worksheet = xlsx.utils.json_to_sheet(monthlyWorkTimeExportList);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'TEK-Projekt - czas pracy');
    });
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName +
          ' ' +
          this.getMonthString() +
          '-' +
          new Date().getFullYear() +
          EXCEL_EXTENSION
      );
    });
  }
}
