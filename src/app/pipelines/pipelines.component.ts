import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {PipelinesDataSource} from './pipelines-datasource';
import {PipelineService} from "../pipeline.service";
import {LogService} from "../log.service";

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.css']
})
export class PipelinesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PipelinesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'paused', 'actions'];

  constructor(private pipelineService: PipelineService,
              private logger: LogService) {
  }

  ngOnInit() {
    this.dataSource = new PipelinesDataSource(this.paginator, this.sort, this.pipelineService);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  resumePipe(name: string) {
    this.pipelineService.get(name).subscribe(pipeline => {
      if (pipeline.spec.paused) {
        pipeline.spec.paused = false;
        this.pipelineService.update(pipeline).subscribe(() => window.location.reload());
      } else {
        this.logger.info('pipeline is working, no need to resume');
      }
    });
  }

  pausePipe(name: string) {
    this.pipelineService.get(name).subscribe(pipeline => {
      if (!pipeline.spec.paused) {
        pipeline.spec.paused = true;
        this.pipelineService.update(pipeline).subscribe(() => window.location.reload());
      } else {
        this.logger.info('pipeline has been paused, no need to resume');
      }
    });
  }

  reset(name: string) {
    this.pipelineService.get(name).subscribe(pipeline => {
      if (pipeline.spec.paused) {
        this.pipelineService.reset(name).subscribe(() => window.location.reload());
      } else {
        this.logger.info('pipeline is working, can\'t reset full');
      }
    });
  }

  delete(name: string) {
    this.pipelineService.delete(name).subscribe(() => window.location.reload());
  }
}
