import {Component, OnInit} from '@angular/core';
import {PipelineService} from '../pipeline.service';
import {PipelineSpecVO, PipelineVO} from '../model/pipeline';
import {Router} from '@angular/router';
import {JsonEditorOptions} from '../json-editor/json-editor.component';

@Component({
  selector: 'app-pipeline-create',
  templateUrl: './pipeline-create.component.html',
  styleUrls: ['./pipeline-create.component.css']
})
export class PipelineCreateComponent implements OnInit {

  pipeline: PipelineVO;
  editorOptions: JsonEditorOptions;

  constructor(private pipelineService: PipelineService,
              private router: Router
  ) {
    this.pipeline = new PipelineVO();
    this.pipeline.metadata.name = 'TODO';
    this.pipeline.spec = new PipelineSpecVO();
    this.pipeline.spec.paused = false;
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'tree'];
  }

  ngOnInit() {
  }

  save() {
    this.pipelineService.create(this.pipeline).subscribe(resp => {
      this.router.navigateByUrl(`pipelines/${resp['name']}`);
    });
  }
}
