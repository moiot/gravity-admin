/* Do not change, this code is generated from Golang structs */


export class Route {
  'source-schema-name': string;
  'source-table-name': string;
  'target-schema-name': string;
  'target-table-name': string;

  static createFrom(source: any) {
    const result = new Route();
    result['source-schema-name'] = source['source-schema-name'];
    result['source-table-name'] = source['source-table-name'];
    result['target-schema-name'] = source['target-schema-name'];
    result['target-table-name'] = source['target-table-name'];
    return result;
  }

  // [Route:]


  // [end]
}


export class Offsets {
  'commit-interval': string;

  static createFrom(source: any) {
    const result = new Offsets();
    result['commit-interval'] = source['commit-interval'];
    return result;
  }

  // [Offsets:]


  // [end]
}

export class Fetch {
  'default': number;
  min: number;
  max: number;

  static createFrom(source: any) {
    const result = new Fetch();
    result['default'] = source['default'];
    result['min'] = source['min'];
    result['max'] = source['max'];
    return result;
  }

  // [Fetch:]


  // [end]
}

export class KafkaConsumerConfig {
  'max-wait-time': string;
  'fetch': Fetch;
  'offsets': Offsets;

  static createFrom(source: any) {
    const result = new KafkaConsumerConfig();
    result['max-wait-time'] = source['max-wait-time'];
    result['fetch'] = source['fetch'] ? Fetch.createFrom(source['fetch']) : null;
    result['offsets'] = source['offsets'] ? Offsets.createFrom(source['offsets']) : null;
    return result;
  }

  // [KafkaConsumerConfig:]


  // [end]
}

export class SASL {
  'enable': boolean;
  'user': string;
  'password': string;

  static createFrom(source: any) {
    const result = new SASL();
    result['enable'] = source['enable'];
    result['user'] = source['user'];
    result['password'] = source['password'];
    return result;
  }

  // [SASL:]


  // [end]
}

export class KafkaNetConfig {
  'sasl': SASL;

  static createFrom(source: any) {
    const result = new KafkaNetConfig();
    result['sasl'] = source['sasl'] ? SASL.createFrom(source['sasl']) : null;
    return result;
  }

  // [KafkaNetConfig:]


  // [end]
}

export class KafkaCommonConfig {
  'client-id': string;
  'channel-buffer-size': number;

  static createFrom(source: any) {
    const result = new KafkaCommonConfig();
    result['client-id'] = source['client-id'];
    result['channel-buffer-size'] = source['channel-buffer-size'];
    return result;
  }
}

export class KafkaGlobalConfig {
  'broker-addrs': string[];
  'group-id': string;
  'topics': string[];
  'consume-from': string;
  'net': KafkaNetConfig;
  'consumer': KafkaConsumerConfig;
  common: KafkaCommonConfig;

  static createFrom(source: any) {
    const result = new KafkaGlobalConfig();
    result['broker-addrs'] = source['broker-addrs'];
    result['group-id'] = source['group-id'];
    result['topics'] = source['topics'];
    result['consume-from'] = source['consume-from'];
    result['net'] = source['net'] ? KafkaNetConfig.createFrom(source['net']) : null;
    result['consumer'] = source['consumer'] ? KafkaConsumerConfig.createFrom(source['consumer']) : null;
    result['common'] = source['common'] ? KafkaCommonConfig.createFrom(source['common']) : null;
    return result;
  }

  // [KafkaGlobalConfig:]


  // [end]
}

export class DBConfig {
  'host': string;
  'location': string;
  'username': string;
  'password': string;
  'port': number;
  'schema': string;

  static createFrom(source: any) {
    const result = new DBConfig();
    result['host'] = source['host'];
    result['location'] = source['location'];
    result['username'] = source['username'];
    result['password'] = source['password'];
    result['port'] = source['port'];
    result['schema'] = source['schema'];
    return result;
  }

  // [DBConfig:]


  // [end]
}

export class OffsetStoreConfig {
  'type': string;
  'db': DBConfig;

  static createFrom(source: any) {
    const result = new OffsetStoreConfig();
    result['type'] = source['type'];
    result['db'] = source['db'] ? DBConfig.createFrom(source['db']) : null;
    return result;
  }

  // [OffsetStoreConfig:]


  // [end]
}

export class TableConfig {
  schema: string;
  table: string;
  'rename-columns': Object;
  'ignore-columns': string[];

  static createFrom(source: any) {
    const result = new TableConfig();
    result['schema'] = source['schema'];
    result['table'] = source['table'];
    result['rename-columns'] = source['rename-columns'];
    result['ignore-columns'] = source['ignore-columns'];
    return result;
  }
}

export class PipelineConfig {
  'name': string;
  'unique-source-name': string;
  'input': string;
  'output': string;
  'offset-store': OffsetStoreConfig;
  'kafka-global': KafkaGlobalConfig;
  'target-mysql': DBConfig;
  'sql-execution-engine': string;
  'target-mongo': string;
  'routes': Route[];
  'executor-count-per-table': number;
  'batch-size-per-table': number;
  'max-retry-count': number;
  'retry-timeout': number;
  'continue-on-plugin-error': boolean;
  'continue-on-sql-error': boolean;
  'detect-conflict': boolean;
  'conflict-log': string;
  'override': boolean;
  'use-bidirection': boolean;
  'use-shading-proxy': boolean;
  'job-callback': string;
  'before-job-execution': string[];
  'after-job-execution': string[];
  'table-config': TableConfig[];

  static createFrom(source: any) {
    const result = new PipelineConfig();
    result['name'] = source['name'];
    result['unique-source-name'] = source['unique-source-name'];
    result['input'] = source['input'];
    result['output'] = source['output'];
    result['offset-store'] = source['offset-store'] ? OffsetStoreConfig.createFrom(source['offset-store']) : null;
    result['kafka-global'] = source['kafka-global'] ? KafkaGlobalConfig.createFrom(source['kafka-global']) : null;
    result['target-mysql'] = source['target-mysql'] ? DBConfig.createFrom(source['target-mysql']) : null;
    result['sql-execution-engine'] = source['sql-execution-engine'];
    result['target-mongo'] = source['target-mongo'];
    result['routes'] = source['routes'] ? source['routes'].map(function (element) {
      return Route.createFrom(element);
    }) : null;
    result['executor-count-per-table'] = source['executor-count-per-table'];
    result['batch-size-per-table'] = source['batch-size-per-table'];
    result['max-retry-count'] = source['max-retry-count'];
    result['retry-timeout'] = source['retry-timeout'];
    result['continue-on-plugin-error'] = source['continue-on-plugin-error'];
    result['continue-on-sql-error'] = source['continue-on-sql-error'];
    result['detect-conflict'] = source['detect-conflict'];
    result['conflict-log'] = source['conflict-log'];
    result['override'] = source['override'];
    result['use-bidirection'] = source['use-bidirection'];
    result['use-shading-proxy'] = source['use-shading-proxy'];
    result['job-callback'] = source['job-callback'];
    result['before-job-execution'] = source['before-job-execution'];
    result['after-job-execution'] = source['after-job-execution'];
    result['table-config'] = source['table-config'] ? source['table-config'].map(function (element) {
      return TableConfig.createFrom(element);
    }) : null;
    return result;
  }

  // [PipelineConfig:]


  // [end]
}
