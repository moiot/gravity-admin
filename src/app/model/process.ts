import {TaskVO} from './pipeline';

export class ProcessVO {
  id: string;
  component: string;
  labels: object;
  state: string;
  pipeId: string;
  pipeName: string;
  task: TaskVO;

  static createFrom(source: any) {
    const result = new ProcessVO();
    result.id = source['id'].toString();
    result.component = source['component'];
    result.labels = source['labels'];
    result.state = source['state'];
    result.pipeId = source['pipeId'];
    result.pipeName = source['pipeName'];
    result.task = source['task'] ? TaskVO.createFrom(source['task']) : null;
    return result;
  }
}

export const Working = 'Working';
export const Free = 'Free';
