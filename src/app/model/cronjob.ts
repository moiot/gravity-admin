export class Cronjob {
  pipeline: string;
  name: string;
  action: string;
  cron: string;


  static createFrom(source: any) {
    const result = new Cronjob();
    result.pipeline = source.pipeline;
    result.name = source.name;
    result.action = source.action;
    result.cron = source.cron;
    return result;
  }
}

export const Cronjobs: Cronjob[] = [
  {
    pipeline: '123',
    name: 'aaa',
    action: 'pause',
    cron: '0 6 * * *',
  },
  {
    pipeline: '123',
    name: 'bbb',
    action: 'resume',
    cron: '0 22 * * *',
  },
];
