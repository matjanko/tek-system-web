import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectEffort } from './models/project-effort';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-project-effort',
  templateUrl: './project-effort.component.html',
  styleUrls: ['./project-effort.component.less']
})
export class ProjectEffortComponent implements OnInit {
  columns = [
    'projectSymbol',
    'customerName',
    'projectName',
    'hours',
    'hasProgress',
    'projectId'
  ]

  dataSource = new MatTableDataSource(data);
  faCircle = faCircle;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

}

const data: ProjectEffort[] = [
  { projectId: 5, projectSymbol: 'T0150', projectName: 'Testowy projekt 1', customerName: 'Apa hubka', hours: 4500, hasProgress: true },
  { projectId: 10, projectSymbol: 'T0190', projectName: 'Testowy projekt 2221', customerName: 'Apa 222hubka', hours: 45200, hasProgress: false },
]
