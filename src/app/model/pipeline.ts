import { PipelineConfig as GravityConfig } from './gravity-config';
import { PipelineConfig as NuclearConfig } from './nuclear-config';
import { PipelineConfig as ScannerConfig } from './scanner-config';

/* Do not change, this code is generated from Golang structs */

export class TaskStatusVO {
  'position': string;
  'processId': number;
  'state': string;
  'lastUpdate': string;
  'task': TaskVO;

  static createFrom(source: any) {
    const result = new TaskStatusVO();
    result['task'] = source['task'] ? TaskVO.createFrom(source['task']) : null;
    result['position'] = source['position'];
    result['processId'] = source['processId'];
    result['state'] = source['state'];
    result['lastUpdate'] = source['lastUpdate'];
    return result;
  }

  // [TaskStatusVO:]


  // [end]
}

export class PipelineStatusVO {
  'state': string;
  'tasks': TaskStatusVO[];

  static createFrom(source: any) {
    const result = new PipelineStatusVO();
    result['tasks'] = source['tasks'] ? source['tasks'].map(function (element) {
      return TaskStatusVO.createFrom(element);
    }) : null;
    result['state'] = source['state'];
    return result;
  }

  // [PipelineStatusVO:]


  // [end]
}

export class LabelSelector {
  'Key': string;
  'op': string;
  'values': string[];

  static createFrom(source: any) {
    const result = new LabelSelector();
    result['Key'] = source['Key'];
    result['op'] = source['op'];
    result['values'] = source['values'];
    return result;
  }

  // [LabelSelector:]


  // [end]
}

export class TaskVO {
  'component': string;
  'name': string;
  'config': GravityConfig | NuclearConfig | ScannerConfig;

  get key(): string {
    return this.name + '-' + this.component;
  }

  static createFrom(source: any) {
    const result = new TaskVO();
    result['component'] = source['component'];
    result['name'] = source['name'];
    switch (result.component) {
      case 'gravity': {
        if (source.config !== null) {
          result.config = GravityConfig.createFrom(source.config);
        }
        break;
      }

      case 'nuclear': {
        if (source.config !== null) {
          result.config = NuclearConfig.createFrom(source.config);
        }
        break;
      }

      case 'scanner': {
        if (source.config !== null) {
          result.config = ScannerConfig.createFrom(source.config);
        }
        break;
      }
    }
    return result;
  }

  // [TaskVO:]

  // [end]
}

export class TaskSpecVO {
  'disabled': boolean;
  'selectors': LabelSelector[];
  'task': TaskVO;

  static createFrom(source: any) {
    const result = new TaskSpecVO();
    result['task'] = source['task'] ? TaskVO.createFrom(source['task']) : null;
    result['selectors'] = source['selectors'] ? source['selectors'].map(function (element) {
      return LabelSelector.createFrom(element);
    }) : null;
    result['disabled'] = source['disabled'];
    return result;
  }

  // [TaskSpecVO:]


  // [end]
}

export class PipelineSpecVO {
  'lastUpdate': string;
  'paused': boolean;
  'tasks': TaskSpecVO[];

  static createFrom(source: any) {
    const result = new PipelineSpecVO();
    result['tasks'] = source['tasks'] ? source['tasks'].map(function (element) {
      return TaskSpecVO.createFrom(element);
    }) : null;
    result['paused'] = source['paused'];
    result['lastUpdate'] = source['lastUpdate'];
    return result;
  }

  // [PipelineSpecVO:]


  // [end]
}

export class PipelineVO {
  'id': number;
  'name': string;
  'spec': PipelineSpecVO;
  'status': PipelineStatusVO;
  'version': number;

  static createFrom(source: any) {
    const result = new PipelineVO();
    result['id'] = source['id'];
    result['name'] = source['name'];
    result['version'] = source['version'];
    result['spec'] = source['spec'] ? PipelineSpecVO.createFrom(source['spec']) : null;
    result['status'] = source['status'] ? PipelineStatusVO.createFrom(source['status']) : null;
    return result;
  }

  // [PipelineVO:]


  // [end]
}

export class CreatePipelineRequest {
  'name': string;
  'spec': PipelineSpecVO;
}
