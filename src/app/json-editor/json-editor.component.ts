import {Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';
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

const gravityTemplate = {
  'disabled': false,
  'selectors': null,
  'task': {
    'component': 'gravity',
    'name': 'TODO',
    'config': {
      'detect-txn': true,
      'input': 'mysql',
      'output': 'kafka',
      'output-format': 'pb',
      'mysql': {
        'source': {
          'host': 'TODO',
          'username': 'TODO',
          'password': 'TODO',
          'location': 'Asia/Shanghai',
          'port': 3306,
        },
        'start-position': {
          'binlog-gtid': '',
          'binlog-name': '',
          'binlog-pos': 0
        }
      },
      'route-mode': 'static',
      'static-route-config': {
        'routes': [
          {
            'source-db': 'TODO',
            'source-table': 'TODO',
            'dml-target-topic': 'TODO',
          }
        ]
      },
      'kafka-global': {
        'broker-addrs': [
          'TODO:9092'
        ],
        'mode': 'async',
        'sent-log': {
          'format': 'json',
          'file': {
            'filename': 'config/msg_sent.log',
            'max-size': 30,
            'max-days': 15,
            'compress': true
          }
        },
      },
    }
  }
};

const nuclearTemplate = {
  'disabled': false,
  'selectors': null,
  'task': {
    'component': 'nuclear',
    'name': 'TODO',
    'config': {
      'target-mysql': {
        'host': 'TODO',
        'username': 'TODO',
        'password': 'TODO',
        'location': 'Asia/Shanghai',
        'port': 3306,
      },
      'routes': [
        {
          'source-schema-name': 'TODO',
          'source-table-name': 'TODO'
        }
      ],
      'batch-size-per-table': 500,
      'executor-count-per-table': 200,
      'input': 'kafka',
      'output': 'mysql',
      'kafka-global': {
        'broker-addrs': [
          'TODO:9092'
        ],
        'consume-from': 'oldest',
        'group-id': 'TODO',
        'topics': [
          'TODO'
        ]
      },
      'use-bidirection': false,
      'use-shading-proxy': false
    },
  }
};

const scannerTemplate = {
  'disabled': false,
  'selectors': null,
  'task': {
    'component': 'scanner',
    'name': 'TODO',
    'config': {
      'output-format': 'pb',
      'source': {
        'host': 'TODO',
        'username': 'TODO',
        'password': 'TODO',
        'location': 'Asia/Shanghai',
        'port': 3306,
      },
      'table-config': [
        {
          'schema': 'TODO',
          'table': 'TODO',
          'scan-column': 'TODO',
          'scan-type': 'TODO'
        }
      ],
      'static-route-config': {
        'routes': [
          {
            'dml-target-topic': 'TODO',
            'source-db': 'TODO',
            'source-table': 'TODO'
          }
        ]
      },
      'table-scan-batch': 2000,
      'batch-per-second-limit': 1,
      'kafka-global': {
        'broker-addrs': [
          'TODO:9092'
        ],
        'mode': 'async',
        'sent-log': {
          'format': 'json',
          'file': {
            'filename': 'config/msg_sent.log',
            'max-size': 30,
            'max-days': 15,
            'compress': true
          }
        }
      }
    }
  }
};

const templates =
  [
    {
      text: 'data',
      title: 'Insert tasks of spec for big data pipeline',
      field: 'tasks',
      value: [gravityTemplate],
    },
    {
      text: 'mysql2mysql',
      title: 'Insert tasks of spec for mysql2mysql pipeline',
      field: 'tasks',
      value: [scannerTemplate, gravityTemplate, nuclearTemplate],
    },
    // {
    //   text: 'gravity task',
    //   title: 'Insert a gravity task node',
    //   field: 'task',
    //   value: gravityTemplate
    // },
    // {
    //   text: 'nuclear task',
    //   title: 'Insert a nuclear task node',
    //   field: 'task',
    //   value: nuclearTemplate
    // },
    // {
    //   text: 'scanner task',
    //   title: 'Insert a scanner task node',
    //   field: 'task',
    //   value: scannerTemplate
    // },
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
