import {Component, Input, OnInit} from '@angular/core';
import {Cronjob, Cronjobs} from '../model/cronjob';
import {MatDialog} from '@angular/material';
import {CronjobCreateDialogComponent} from './cronjob-create-dialog.component';
import {CronjobService} from '../cronjob.service';
import {BehaviorSubject, CompletionObserver, Observable} from 'rxjs';

@Component({
  selector: 'app-pipeline-cronjob',
  templateUrl: './pipeline-cronjob.component.html',
  styleUrls: ['./pipeline-cronjob.component.css']
})
export class PipelineCronjobComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'cron', 'actions'];
  data: BehaviorSubject<Cronjob[]> = new BehaviorSubject<Cronjob[]>([]);
  @Input('pipeline') pipeline: string;

  constructor(private dialog: MatDialog, private cronjobService: CronjobService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.cronjobService.listByPipeline(this.pipeline).subscribe(v => {
      console.log(JSON.stringify(v));
      this.data.next(v);
    });
  }


  delete(c: Cronjob) {
    this.cronjobService.delete(c).subscribe(() => {
      this.loadData();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CronjobCreateDialogComponent, {
      width: '450px',
      data: this.pipeline,
    });
    const self = this;
    dialogRef.afterClosed().subscribe(cronjob => {
      if (cronjob) {
        this.cronjobService.create(cronjob).subscribe(() => {
            self.loadData();
          }
        );
      }
    });
  }
}
