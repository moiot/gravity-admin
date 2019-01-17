import {Component, OnInit} from '@angular/core';
import {PipelineVO} from '../model/pipeline';
import {JsonEditorOptions} from '../json-editor/json-editor.component';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {PipelineService} from '../pipeline.service';
import {LogService} from '../log.service';
import {Cronjob, Cronjobs} from '../model/cronjob';

@Component({
  selector: 'app-pipeline-detail',
  templateUrl: './pipeline-detail.component.html',
  styleUrls: ['./pipeline-detail.component.css']
})
export class PipelineDetailComponent implements OnInit {
  pipeline: PipelineVO;
  cronJobs: Cronjob[] = Cronjobs;
  editorOptions: JsonEditorOptions;
  viewOptions: JsonEditorOptions;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private pipelineService: PipelineService,
              private logger: LogService) {
    this.editorOptions = new JsonEditorOptions();
    this.viewOptions = new JsonEditorOptions();
  }

  ngOnInit() {
    this.editorOptions.modes = ['code', 'tree'];
    this.viewOptions.mode = 'view';
    this.getPipeline();
  }

  onSubmit() {
    this.pipelineService.update(this.pipeline).subscribe(() => {
      this.getPipeline();
    });
  }

  getPipeline() {
    const name = this.route.snapshot.paramMap.get('name');
    const self = this;
    this.pipelineService.get(name).subscribe({
      next: function (p) {
        self.pipeline = p;
        self.logger.info(`loaded pipeline ${p.metadata.name}`);
      },
      error: function () {
        self.pipeline = PipelineVO.createFrom(
          {
            'metadata': {
              'name': 'mysql2mysql.mos-93bi',
              'namespace': 'default',
              'selfLink': '/apis/gravity.mobike.io/v1alpha1/namespaces/default/pipelines/mysql2mysql.mos-93bi',
              'uid': '549a3680-18c3-11e9-971a-6c92bf5c273a',
              'resourceVersion': '24229798',
              'generation': 1,
              'creationTimestamp': '2019-01-15T12:44:42Z',
              'ownerReferences': [{
                'apiVersion': 'gravity.mobike.io/v1alpha1',
                'kind': 'Cluster',
                'name': 'gravity-operator-cluster',
                'uid': 'bd9467ba-13bb-11e9-971a-6c92bf5c273a',
                'controller': true,
                'blockOwnerDeletion': true
              }]
            },
            'spec': {
              'configHash': '7b8bb4bc57',
              'image': 'moiot/gravity:v0.9.11',
              'command': ['/gravity', '-config=/etc/gravity/config.json'],
              'paused': false,
              'lastUpdate': '2019-01-15T12:44:42Z',
              'config': {
                'name': 'mysql2mysql.mos-93bi',
                'version': '1.0',
                'input': {
                  'type': 'mysql',
                  'mode': 'stream',
                  'config': {
                    'source': {'host': '10.1.200.240', 'password': 'CxxUMWto4axEJ3uo', 'port': 3306, 'username': '_gravity'},
                    'start-position': {'binlog-gtid': 'e29871c8-6542-11e7-ac7f-246e96523420:1-63784652'}
                  }
                },
                'output': {
                  'type': 'mysql',
                  'config': {
                    'routes': [{'match-schema': 'mos', 'match-table': '*', 'target-schema': 'mos_bi'}],
                    'target': {'host': '10.1.200.93', 'password': 'CxxUMWto4axEJ3uo', 'port': 3306, 'username': '_gravity'}
                  }
                },
                'scheduler': {
                  'type': 'batch-table-scheduler',
                  'config': {'batch-size': 1, 'nr-worker': 10, 'queue-size': 1024, 'sliding-window-size': 10240}
                }
              }
            },
            'status': {
              'observedGeneration': 1,
              'configHash': '7b8bb4bc57',
              'image': 'moiot/gravity:v0.9.11',
              'command': ['/gravity', '-config=/etc/gravity/config.json'],
              'position': '{"current_position":{"binlog-name":"mysql-bin.000219","binlog-pos":11616081,' +
                '"binlog-gtid":"e29871c8-6542-11e7-ac7f-246e96523420:1-64253192"},' +
                '"start_position":{"binlog-name":"","binlog-pos":0,"binlog-gtid":"e29871c8-6542-11e7-ac7f-246e96523420:1-63784652"}}',
              'podName': 'mysql2mysql.mos-93bi-6b57c6b9fc-5vv7d',
              'conditions': [{
                'type': 'Running',
                'status': 'True',
                'lastUpdateTime': '2019-01-15T12:44:54Z',
                'lastTransitionTime': '2019-01-15T12:44:54Z',
                'reason': 'PipelineAvailable',
                'message': 'Pipeline has available deployment'
              }, {
                'type': 'Incremental',
                'status': 'True',
                'lastUpdateTime': '2019-01-15T12:44:54Z',
                'lastTransitionTime': '2019-01-15T12:44:54Z'
              }]
            }
          });
      },
    });
  }

  back() {
    this.location.back();
  }
}
