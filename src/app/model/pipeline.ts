/* Do not change, this code is generated from Golang structs */

export class TaskStatusVO {
  'position': string;
  'processId': string;
  'state': string;
  'lastUpdate': string;
  'version': string;
  'task': TaskVO;

  static createFrom(source: any) {
    const result = new TaskStatusVO();
    result['task'] = source['task'] ? TaskVO.createFrom(source['task']) : null;
    result['position'] = source['position'];
    result['processId'] = source['processId'].toString();
    result['state'] = source['state'];
    result['lastUpdate'] = source['lastUpdate'];
    result['version'] = source['version'];
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
  pipelineName: string;
  hash: string;
  // 'config': GravityConfig | NuclearConfig | ScannerConfig;
  'config': object;

  get key(): string {
    return this.name + '-' + this.component;
  }

  static createFrom(source: any) {
    const result = new TaskVO();
    result['component'] = source['component'];
    result['name'] = source['name'];
    result['config'] = source['config'];
    result['pipelineName'] = source['pipelineName'];
    result['hash'] = source['hash'];
    // switch (result.component) {
    //   case 'gravity': {
    //     if (source.config !== null) {
    //       result.config = GravityConfig.createFrom(source.config);
    //     }
    //     break;
    //   }
    //
    //   case 'nuclear': {
    //     if (source.config !== null) {
    //       result.config = NuclearConfig.createFrom(source.config);
    //     }
    //     break;
    //   }
    //
    //   case 'scanner': {
    //     if (source.config !== null) {
    //       result.config = ScannerConfig.createFrom(source.config);
    //     }
    //     break;
    //   }
    // }
    return result;
  }

  // [TaskVO:]

  // [end]
}

export class TaskSpecVO {
  'disabled': boolean;
  version: string;
  'task': TaskVO;

  static createFrom(source: any) {
    const result = new TaskSpecVO();
    result['task'] = source['task'] ? TaskVO.createFrom(source['task']) : null;
    result['disabled'] = source['disabled'];
    result['version'] = source['version'];
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
  'name': string;
  'spec': PipelineSpecVO;
  'status': PipelineStatusVO;
  'version': number;

  static createFrom(source: any) {
    const result = new PipelineVO();
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

export const Gravity = 'gravity';
export const Nuclear = 'nuclear';
export const Scanner = 'scanner';
