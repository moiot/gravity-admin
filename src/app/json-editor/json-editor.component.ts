import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import * as editor from 'jsoneditor';

@Component({
  selector: 'app-json-editor',
  template: '<div #container style="height: 600px;margin-top: 5px;margin-bottom: 5px"></div>',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements OnInit {

  private editor: any;
  @ViewChild('container') container: ElementRef;

  private _data: Object;

  @Input() options: JsonEditorOptions = new JsonEditorOptions();

  @Input('data')
  set data(value: Object) {
    const same = JSON.stringify(value) === JSON.stringify(this._data);
    if (!same) {
      this._data = value;
      if (this.editor && !same) {
        this.editor.set(value);
        this.expandAll();
      }
    }
  }

  @Output('dataChange') dataChange = new EventEmitter<Object>();

  constructor() {
  }

  ngOnInit() {
    const comp = this;
    this.options['onChange'] = function () {
      let t: JSON;
      try {
        t = comp.get();
      } catch (e) {
        return;
      }
      comp._data = t;
      comp.dataChange.emit(t);
    };
    this.editor = new editor(this.container.nativeElement, this.options, this._data);
    this.expandAll();
  }

  public collapseAll() {
    this.editor.collapseAll();
  }

  public expandAll() {
    this.editor.expandAll();
  }

  public focus() {
    this.editor.focus();
  }

  public get(): JSON {
    return this.editor.get();
  }

  public getMode(): JsonEditorMode {
    return this.editor.getMode() as JsonEditorMode;
  }

  public getName(): string {
    return this.editor.getName();
  }

  public getText(): string {
    return this.editor.getText();
  }

  public set(json: JSON) {
    this.editor.set(json);
  }

  public setMode(mode: JsonEditorMode) {
    this.editor.setMode(mode);
  }

  public setName(name: string) {
    this.editor.setName(name);
  }

  public setSchema(schema: any) {
    this.editor.setSchema(schema);
  }

  public destroy() {
    this.editor.destroy();
  }
}

export type JsonEditorMode = 'tree' | 'view' | 'form' | 'code' | 'text';

const kafkaTemplate = {
  'config': {
    "input": {
      "mysql": {
        "mode": "stream",
        "source": {
          "host": "TODO",
          "port": 3306,
          "username": "TODO",
          "password": "TODO",
        }
      }
    },
    "output": {
      "async-kafka": {
        "kafka-global-config": {
          "broker-addrs": ["TODO"],
          "mode": "async",
        },
        "routes": [
          {
            "match-schema": "TODO",
            "match-table": "*",
            "dml-topic": "TODO",
          }
        ],
      }
    }
  }
};

const streamTemplate = {
  'config': {
    "input": {
      "mysql": {
        "mode": "stream",
        "source": {
          "host": "TODO",
          "port": 3306,
          "username": "TODO",
          "password": "TODO",
        }
      }
    },
    "output": {
      "mysql": {
        "routes": [
          {
            "match-schema": "TODO",
            "match-table": "*",
            "target-schema": "",
            "target-table": "",
          }
        ],
        "target": {
          "host": "TODO",
          "port": 3306,
          "username": "TODO",
          "password": "TODO",
        }
      }
    },
    "scheduler": {
      "batch-table-scheduler": {
        "batch-size": 1,
        "nr-worker": 10,
        "queue-size": 1024,
        "sliding-window-size": 10240
      }
    }
  }
};

const replicationTemplate = {
  'config': {
    "input": {
      "mysql": {
        "mode": "replication",
        "batch-per-second-limit": 10,
        "nr-scanner": 10,
        "table-scan-batch": 1000,
        "source": {
          "host": "TODO",
          "port": 3306,
          "username": "TODO",
          "password": "TODO",
        },
        "table-configs": [
          {
            "schema": "TODO",
            "table": "*",
          },
        ],
      }
    },
    "output": {
      "mysql": {
        "routes": [
          {
            "match-schema": "TODO",
            "match-table": "*",
            "target-schema": "",
            "target-table": "",
          }
        ],
        "target": {
          "host": "TODO",
          "port": 3306,
          "username": "TODO",
          "password": "TODO",
        }
      }
    },
    "scheduler": {
      "batch-table-scheduler": {
        "batch-size": 1,
        "nr-worker": 10,
        "queue-size": 1024,
        "sliding-window-size": 10240
      }
    }
  }
};

const templates =
  [
    {
      text: 'mysql2kafka',
      title: 'Insert tasks of spec for mysql2kafka pipeline',
      field: 'spec',
      value: kafkaTemplate,
    },
    {
      text: 'mysql stream',
      title: 'Insert tasks of spec for mysql stream pipeline',
      field: 'spec',
      value: streamTemplate,
    },
    {
      text: 'mysql replication',
      title: 'Insert tasks of spec for mysql replication pipeline',
      field: 'spec',
      value: replicationTemplate,
    },
  ];

export class JsonEditorOptions {
  public ace: Object;
  public ajv: Object;
  // public onChange: () => void;
  public onError: (error: any) => void;
  public onModeChange: (newMode: JsonEditorMode, oldMode: JsonEditorMode) => void;
  public escapeUnicode: boolean;
  public sortObjectKeys: boolean;
  public history: boolean;
  public mode: JsonEditorMode;
  public modes: JsonEditorMode[];
  public name: String;
  public schema: Object;
  public search: boolean;
  public indentation: Number;
  public theme: Number;
  public language: String;
  public languages: Object;
  public templates: object[];

  constructor() {
    this.escapeUnicode = false;
    this.sortObjectKeys = false;
    this.history = true;
    this.mode = 'tree';
    this.search = true;
    this.indentation = 2;
    this.templates = templates;
  }

}
