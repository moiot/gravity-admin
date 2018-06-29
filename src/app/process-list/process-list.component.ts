import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ProcessListDataSource} from './process-list-datasource';
import {ProcessService} from '../process.service';
import {Gravity, Nuclear, Scanner} from '../model/pipeline';
import {Free, Working} from "../model/process";

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProcessListDataSource;

  constructor(private processService: ProcessService) {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'component', 'state', 'pipeId', 'pipeName', 'labels'];

  gravityWorking = 0;
  gravityTotal = 0;
  nuclearWorking = 0;
  nuclearTotal = 0;
  scannerWorking = 0;
  scannerTotal = 0;

  ngOnInit() {
    this.dataSource = new ProcessListDataSource(this.paginator, this.sort, []);
    this.processService.list().subscribe(processes => {
      this.dataSource.data = processes;
      for (const p of processes) {
        switch (p.component) {
          case Gravity:
            this.gravityTotal++;
            if (p.state === Working) {
              this.gravityWorking++;
            }
            break;
          case Nuclear:
            this.nuclearTotal++;
            if (p.state === Working) {
              this.nuclearWorking++;
            }
            break;
          case Scanner:
            this.scannerTotal++;
            if (p.state === Working) {
              this.scannerWorking++;
            }
            break;
        }
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
