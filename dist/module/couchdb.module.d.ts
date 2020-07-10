import { DynamicModule } from '@nestjs/common';
import { CouchDbConnectionConfig } from '../couchdb';
export declare class CouchDbModule {
    static forRoot(config: CouchDbConnectionConfig): DynamicModule;
    static forFeature(entities: Function[]): DynamicModule;
}
