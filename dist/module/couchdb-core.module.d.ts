import { DynamicModule } from '@nestjs/common';
import { CouchDbConnectionConfig } from '../couchdb';
export declare class CouchDbCoreModule {
    static forRoot(config: CouchDbConnectionConfig): DynamicModule;
}
