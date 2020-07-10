import { Provider } from '@nestjs/common';
import { CouchDbConnectionConfig } from '../couchdb';
export declare const createCouchDbConnectionProviders: (config: CouchDbConnectionConfig) => Provider<any>[];
export declare const createCouchDbRepositoryProvider: (entity: Function) => Provider<any>;
export declare const createCouchDbProviders: (entities: Function[]) => Provider<any>[];
