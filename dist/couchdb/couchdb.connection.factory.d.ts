import * as nano from 'nano';
import { CouchDbConnectionConfig } from './interfaces';
export declare class CouchDbConnectionFactory {
    static create(config: CouchDbConnectionConfig): Promise<nano.ServerScope>;
}
