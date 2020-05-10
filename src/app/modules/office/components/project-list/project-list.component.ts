import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/core/contracts/model/project';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from 'src/app/core/contracts/services/project.service';
import { MatSort } from '@angular/material/sort';
import { NestedMatTableDataSource } from 'src/app/modules/shared/material/nested-mat-table-data-source';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less']
})
export class ProjectListComponent implements OnInit {

  projects: Array<Project> = new Array<Project>();
  dataSource: MatTableDataSource<Project>;
  displayedColumns: Array<string> = ['fullSymbol', 'customer.name', 'name',];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private projectService: ProjectService) { }

  ngOnInit(): void {

    this.projectService.getAll().subscribe((
      data: Array<Project>) => {
        console.log(data);
        this.projects = data;
        this.dataSource = new NestedMatTableDataSource(this.projects);
        this.dataSource.sort = this.sort;
      }
    )

  }

}
