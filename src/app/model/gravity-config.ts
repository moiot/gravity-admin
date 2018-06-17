/* Do not change, this code is generated from Golang structs */


export class TableConfig {
    'schema': string;
    'table': string;
    'pk-override': string[];
    'scan-column': string;
    'scan-type': string;

    static createFrom(source: any) {
        const result = new TableConfig();
        result['schema'] = source['schema'];
        result['table'] = source['table'];
        result['pk-override'] = source['pk-override'];
        result['scan-column'] = source['scan-column'];
        result['scan-type'] = source['scan-type'];
        return result;
    }

    // [TableConfig:]


    // [end]
}

export class StaticRouteRule {
    'source-db': string;
    'source-table': string;
    'dml-target-topic': string;
    'partition-columns': string[];
    'ignore-if-column-contains': string;
    'enable-ddl-topic': boolean;
    'ddl-target-topic': string;
    'broadcast-ddl-to-dml-topic': boolean;

    static createFrom(source: any) {
        const result = new StaticRouteRule();
        result['source-db'] = source['source-db'];
        result['source-table'] = source['source-table'];
        result['dml-target-topic'] = source['dml-target-topic'];
        result['partition-columns'] = source['partition-columns'];
        result['ignore-if-column-contains'] = source['ignore-if-column-contains'];
        result['enable-ddl-topic'] = source['enable-ddl-topic'];
        result['ddl-target-topic'] = source['ddl-target-topic'];
        result['broadcast-ddl-to-dml-topic'] = source['broadcast-ddl-to-dml-topic'];
        return result;
    }

    // [StaticRouteRule:]


    // [end]
}

export class StaticRouteConfig {
    'routes': StaticRouteRule[];

    static createFrom(source: any) {
        const result = new StaticRouteConfig();
        result['routes'] = source['routes'] ? source['routes'].map(function(element) { return StaticRouteRule.createFrom(element); }) : null;
        return result;
    }

    // [StaticRouteConfig:]


    // [end]
}

export class DynamicRouteConfig {
    'route-table': string;
    'route-column': string;

    static createFrom(source: any) {
        const result = new DynamicRouteConfig();
        result['route-table'] = source['route-table'];
        result['route-column'] = source['route-column'];
        return result;
    }

    // [DynamicRouteConfig:]


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

export class Flush {
    'bytes': number;
    'messages': number;
    'frequency': string;
    'max-messages': number;

    static createFrom(source: any) {
        const result = new Flush();
        result['bytes'] = source['bytes'];
        result['messages'] = source['messages'];
        result['frequency'] = source['frequency'];
        result['max-messages'] = source['max-messages'];
        return result;
    }

    // [Flush:]


    // [end]
}

export class KafkaProducerConfig {
    'flush': Flush;

    static createFrom(source: any) {
        const result = new KafkaProducerConfig();
        result['flush'] = source['flush'] ? Flush.createFrom(source['flush']) : null;
        return result;
    }

    // [KafkaProducerConfig:]


    // [end]
}

export class FileLogConfig {
    'filename': string;
    'log-rotate': boolean;
    'max-size': number;
    'max-days': number;
    'max-backups': number;
    'compress': boolean;

    static createFrom(source: any) {
        const result = new FileLogConfig();
        result['filename'] = source['filename'];
        result['log-rotate'] = source['log-rotate'];
        result['max-size'] = source['max-size'];
        result['max-days'] = source['max-days'];
        result['max-backups'] = source['max-backups'];
        result['compress'] = source['compress'];
        return result;
    }

    // [FileLogConfig:]


    // [end]
}

export class LogConfig {
    'level': string;
    'format': string;
    'disable-timestamp': boolean;
    'file': FileLogConfig;

    static createFrom(source: any) {
        const result = new LogConfig();
        result['level'] = source['level'];
        result['format'] = source['format'];
        result['disable-timestamp'] = source['disable-timestamp'];
        result['file'] = source['file'] ? FileLogConfig.createFrom(source['file']) : null;
        return result;
    }

    // [LogConfig:]


    // [end]
}

export class KafkaGlobalConfig {
    'broker-addrs': string[];
    'cert-file': string;
    'key-file': string;
    'ca-file': string;
    'verify-ssl': boolean;
    'mode': string;
    'sent-log': LogConfig;
    'producer': KafkaProducerConfig;
    'net': KafkaNetConfig;

    static createFrom(source: any) {
        const result = new KafkaGlobalConfig();
        result['broker-addrs'] = source['broker-addrs'];
        result['cert-file'] = source['cert-file'];
        result['key-file'] = source['key-file'];
        result['ca-file'] = source['ca-file'];
        result['verify-ssl'] = source['verify-ssl'];
        result['mode'] = source['mode'];
        result['sent-log'] = source['sent-log'] ? LogConfig.createFrom(source['sent-log']) : null;
        result['producer'] = source['producer'] ? KafkaProducerConfig.createFrom(source['producer']) : null;
        result['net'] = source['net'] ? KafkaNetConfig.createFrom(source['net']) : null;
        return result;
    }

    // [KafkaGlobalConfig:]


    // [end]
}

export class MySQLPosition {
    'binlog-name': string;
    'binlog-pos': number;
    'binlog-gtid': string;

    static createFrom(source: any) {
        const result = new MySQLPosition();
        result['binlog-name'] = source['binlog-name'];
        result['binlog-pos'] = source['binlog-pos'];
        result['binlog-gtid'] = source['binlog-gtid'];
        return result;
    }

    // [MySQLPosition:]


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

export class MySQLConfig {
    'source': DBConfig;
    'start-position': MySQLPosition;

    static createFrom(source: any) {
        const result = new MySQLConfig();
        result['source'] = source['source'] ? DBConfig.createFrom(source['source']) : null;
        result['start-position'] = source['start-position'] ? MySQLPosition.createFrom(source['start-position']) : null;
        return result;
    }

    // [MySQLConfig:]


    // [end]
}

export class GtmConfig {
    'use-buffer-duration': boolean;
    'buffer-size': number;
    'channel-size': number;
    'buffer-duration-ms': number;

    static createFrom(source: any) {
        const result = new GtmConfig();
        result['use-buffer-duration'] = source['use-buffer-duration'];
        result['buffer-size'] = source['buffer-size'];
        result['channel-size'] = source['channel-size'];
        result['buffer-duration-ms'] = source['buffer-duration-ms'];
        return result;
    }

    // [GtmConfig:]


    // [end]
}

export class MongoConnConfig {
    'host': string;
    'port': number;
    'username': string;
    'password': string;
    'database': string;

    static createFrom(source: any) {
        const result = new MongoConnConfig();
        result['host'] = source['host'];
        result['port'] = source['port'];
        result['username'] = source['username'];
        result['password'] = source['password'];
        result['database'] = source['database'];
        return result;
    }

    // [MongoConnConfig:]


    // [end]
}

export class MongoSource {
    'source': MongoConnConfig;
    'start-position': number;

    static createFrom(source: any) {
        const result = new MongoSource();
        result['source'] = source['source'] ? MongoConnConfig.createFrom(source['source']) : null;
        result['start-position'] = source['start-position'];
        return result;
    }

    // [MongoSource:]


    // [end]
}

export class MongoConfigs {
    'mongo-sources': MongoSource[];
    'gtm-config': GtmConfig;

    static createFrom(source: any) {
        const result = new MongoConfigs();
        result['mongo-sources'] = source['mongo-sources'] ? source['mongo-sources'].map(function(element) { return MongoSource.createFrom(element); }) : null;
        result['gtm-config'] = source['gtm-config'] ? GtmConfig.createFrom(source['gtm-config']) : null;
        return result;
    }

    // [MongoConfigs:]


    // [end]
}

export class PipelineConfig {
    'name': string;
    'detect-txn': boolean;
    'internal-queue-size': number;
    'unique-source-name': string;
    'input': string;
    'output': string;
    'output-format': string;
    'mongo': MongoConfigs;
    'mysql': MySQLConfig;
    'kafka-global': KafkaGlobalConfig;
    'route-mode': string;
    'dynamic-route-config': DynamicRouteConfig;
    'static-route-config': StaticRouteConfig;
    'table-config': TableConfig[];

    static createFrom(source: any) {
        const result = new PipelineConfig();
        result['name'] = source['name'];
        result['detect-txn'] = source['detect-txn'];
        result['internal-queue-size'] = source['internal-queue-size'];
        result['unique-source-name'] = source['unique-source-name'];
        result['input'] = source['input'];
        result['output'] = source['output'];
        result['output-format'] = source['output-format'];
        result['mongo'] = source['mongo'] ? MongoConfigs.createFrom(source['mongo']) : null;
        result['mysql'] = source['mysql'] ? MySQLConfig.createFrom(source['mysql']) : null;
        result['kafka-global'] = source['kafka-global'] ? KafkaGlobalConfig.createFrom(source['kafka-global']) : null;
        result['route-mode'] = source['route-mode'];
        result['dynamic-route-config'] = source['dynamic-route-config'] ? DynamicRouteConfig.createFrom(source['dynamic-route-config']) : null;
        result['static-route-config'] = source['static-route-config'] ? StaticRouteConfig.createFrom(source['static-route-config']) : null;
        result['table-config'] = source['table-config'] ? source['table-config'].map(function(element) { return TableConfig.createFrom(element); }) : null;
        return result;
    }

    // [PipelineConfig:]


    // [end]
}