import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectEffort } from './models/project-effort';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectEffortService } from './services/project-effort.service';


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
    // 'projectId'
  ]

  projectEfforts: Array<ProjectEffort>;
  dataSource: MatTableDataSource<ProjectEffort>;
  isLoading: boolean = true;
  faCircle = faCircle;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private projectEffortService: ProjectEffortService
  ) {

  }

  ngOnInit(): void {
    this.projectEffortService.getAll().subscribe((resp: Array<ProjectEffort>) => {
        this.projectEfforts = resp;
        this.dataSource = new MatTableDataSource(this.projectEfforts);
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      }
    )
  }
}
