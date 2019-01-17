import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Cronjob} from '../model/cronjob';

@Component({
  selector: 'app-cronjob-create-dialog',
  templateUrl: './cronjob-create-dialog.component.html',
  styleUrls: ['./cronjob-create-dialog.component.css'],
})
export class CronjobCreateDialogComponent implements OnInit {

  cronJob: Cronjob;

  constructor(public dialogRef: MatDialogRef<CronjobCreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit() {
    this.cronJob = new Cronjob();
    this.cronJob.pipeline = this.data;
  }

}
