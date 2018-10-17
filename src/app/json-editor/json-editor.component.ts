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

const gravityDataTemplate = {
  'task': {
    'component': 'gravity',
    'name': 'default',
    'config': {
      'detect-txn': false,
      'input': 'mysql',
      'output': 'kafka',
      'output-format': 'json',
      'mysql': {
        'source': {
          'host': 'TODO',
          'username': 'TODO',
          'password': 'TODO',
          'location': 'Asia/Shanghai',
          'port': 3306,
        }
      },
      'kafka-global': {
        'broker-addrs': [
          'kafka1.hdp.mobike.cn:9093',
          'kafka2.hdp.mobike.cn:9093',
          'kafka6.hdp.mobike.cn:9093'
        ],
        'cert-file': '',
        'key-file': '',
        'ca-file': '',
        'verify-ssl': false,
        'mode': 'async',
        'sent-log': {
          'level': '',
          'format': 'json',
          'disable-timestamp': false,
          'file': {
            'filename': 'config/msg_sent.log',
            'log-rotate': false,
            'max-size': 30,
            'max-days': 15,
            'max-backups': 0,
            'compress': true
          },
          'SlowQueryFile': ''
        },
        'producer': null,
        'net': {
          'sasl': {
            'enable': true,
            'user': 'db_drc',
            'password': 'aLTfSK$4l3'
          },
          'KeepAlive': 0
        }
      },
      'route-mode': 'static',
      'static-route-config': {
        'routes': [
          {
            'source-db': 'TODO',
            'source-table': 'TODO',
            'dml-target-topic': 'binlog.TODO.TODO'
          }
        ]
      }
    }
  }
};

const gravitySandboxTemplate = {
  'task': {
    'component': 'gravity',
    'name': 'default',
    'config': {
      'detect-txn': false,
      'input': 'mysql',
      'output-format': 'pb',
      'mysql': {
        'source': {
          'host': 'TODO',
          'username': 'TODO',
          'password': 'TODO',
          'port': 3306,
          'location': 'Asia/Shanghai',
        }
      },
      'db-routes': [
        {
          'source-schema-name': 'TODO',
          'source-table-name': '*',
        }
      ],
      'target-mysql': {
        'host': 'TODO',
        'username': 'TODO',
        'password': 'TODO',
        'port': 3306,
        'location': 'Asia/Shanghai',
      },
      'target-mysql-worker': {
        'enable-ddl': true,
      },
    }
  }
};

const scannerTemplate = {
  'task': {
    'component': 'scanner',
    'name': 'default',
    'config': {
      'source-master': {
        'host': 'TODO',
        'location': 'Asia/Shanghai',
        'username': 'TODO',
        'password': 'TODO',
        'port': 3306,
      },
      'source': {
        'host': 'TODO',
        'location': 'Asia/Shanghai',
        'username': 'TODO',
        'password': 'TODO',
        'port': 3306,
      },
      'nr-scanner': 10,
      'table-scan-batch': 10000,
      'batch-per-second-limit': 10,
      'batch-size-per-table': 10,
      'target-mysql': {
        'host': 'TODO',
        'location': 'Asia/Shanghai',
        'username': 'TODO',
        'password': 'TODO',
        'port': 3306,
        'max-idle': 500,
        'max-open': 500,
      },
      'table-config': [
        {
          'schema': 'TODO',
          'table': 'TODO',
        }
      ],
      'db-routes': [
        {
          'source-schema-name': 'TODO',
          'source-table-name': 'TODO',
          'target-schema-name': 'TODO',
          'target-table-name': 'TODO'
        }
      ],
      'worker-pool-config': {
        'nr-worker': 250,
        'batch-size': 15,
        'queue-size': 1024,
        'sliding-window-size': 10240
      },
    }
  }
};

const templates =
  [
    {
      text: 'data',
      title: 'Insert tasks of spec for big data pipeline',
      field: 'tasks',
      value: [gravityDataTemplate],
    },
    {
      text: 'sandbox',
      title: 'Insert tasks of spec for sandbox pipeline',
      field: 'tasks',
      value: [gravitySandboxTemplate],
    },
    {
      text: 'mysql-full',
      title: 'Insert tasks of spec for mysql-full pipeline',
      field: 'tasks',
      value: [gravitySandboxTemplate, scannerTemplate],
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