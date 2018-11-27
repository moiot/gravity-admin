/* Do not change, this code is generated from Golang structs */

export class Condition {
  type: string;
  status: string;
  lastUpdateTime: string;
  lastTransitionTime: string;
  reason: string;
  message: string;

  static createFrom(source: any) {
    const result = new Condition();
    result.type = source['type'];
    result.status = source['status'];
    result.lastUpdateTime = source['lastUpdateTime'];
    result.lastTransitionTime = source['lastTransitionTime'];
    result.reason = source['reason'];
    result.message = source['message'];
    return result;
  }

  // [TaskStatusVO:]


  // [end]
}

export class PipelineStatusVO {
  observedGeneration: string;
  configHash: string;
  image: string;
  command: string[];
  position: string;
  podName: string;
  conditions: Condition[];

  static createFrom(source: any) {
    const result = new PipelineStatusVO();
    result.conditions = source['conditions'] ? source['conditions'].map(function (element) {
      return Condition.createFrom(element);
    }) : null;
    result.observedGeneration = source['observedGeneration'];
    result.configHash = source['configHash'];
    result.image = source['image'];
    result.command = source['command'];
    result.position = source['position'];
    result.podName = source['podName'];
    return result;
  }

  // [PipelineStatusVO:]


  // [end]
}

export class PipelineSpecVO {
  lastUpdate: string;
  paused: boolean;
  config: object;
  configHash: string;
  image: string;
  command: string[];

  static createFrom(source: any) {
    const result = new PipelineSpecVO();
    result.command = source['command'];
    result.paused = source['paused'];
    result.lastUpdate = source['lastUpdate'];
    result.config = source['config'];
    result.configHash = source['configHash'];
    result.image = source['image'];
    return result;
  }

  // [PipelineSpecVO:]


  // [end]
}

export class MetaData {
  name: string;
  resourceVersion: string;
  generation: string;
  creationTimestamp: string;

  static createFrom(source: any) {
    const result = new MetaData();
    result.name = source['name'];
    result.resourceVersion = source['resourceVersion'];
    result.generation = source['generation'];
    result.creationTimestamp = source['creationTimestamp'];
    return result;
  }
}

export class PipelineVO {
  kind: string;
  metadata: MetaData;
  apiVersion: string;
  spec: PipelineSpecVO;
  status: PipelineStatusVO;

  constructor() {
    this.metadata = new MetaData();
  }

  static createFrom(source: any) {
    const result = new PipelineVO();
    result.metadata = source['metadata'] ? MetaData.createFrom(source['metadata']) : null;
    result.kind = source['kind'];
    result.apiVersion = source['apiVersion'];
    result.spec = source['spec'] ? PipelineSpecVO.createFrom(source['spec']) : null;
    result.status = source['status'] ? PipelineStatusVO.createFrom(source['status']) : null;
    return result;
  }

  // [PipelineVO:]


  // [end]
}
