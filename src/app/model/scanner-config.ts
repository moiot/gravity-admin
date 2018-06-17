/* Do not change, this code is generated from Golang structs */


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

export class PipelineConfig {
    'name': string;
    'source': DBConfig;
    'table-config': TableConfig[];
    'output-format': string;
    'table-scan-batch': number;
    'kafka-global': KafkaGlobalConfig;
    'static-route-config': StaticRouteConfig;

    static createFrom(source: any) {
        const result = new PipelineConfig();
        result['name'] = source['name'];
        result['source'] = source['source'] ? DBConfig.createFrom(source['source']) : null;
        result['table-config'] = source['table-config'] ? source['table-config'].map(function(element) { return TableConfig.createFrom(element); }) : null;
        result['output-format'] = source['output-format'];
        result['table-scan-batch'] = source['table-scan-batch'];
        result['kafka-global'] = source['kafka-global'] ? KafkaGlobalConfig.createFrom(source['kafka-global']) : null;
        result['static-route-config'] = source['static-route-config'] ? StaticRouteConfig.createFrom(source['static-route-config']) : null;
        return result;
    }

    // [PipelineConfig:]


    // [end]
}