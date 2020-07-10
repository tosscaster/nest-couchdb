import * as nano from 'nano';
import { CouchDbConnectionConfig, Repository } from './interfaces';
export declare class CouchDbRepositoryFactory {
    private connection;
    private config;
    constructor(connection: nano.ServerScope, config: CouchDbConnectionConfig);
    static create(connection: nano.ServerScope, config: CouchDbConnectionConfig): CouchDbRepositoryFactory;
    create<T>(entity: T): Promise<Repository<T>>;
    private getDbName;
    private checkDatabase;
    private createDatabase;
}
