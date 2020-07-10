import { DocumentScope } from 'nano';
import { Repository } from './interfaces';
export declare function CouchDbRepositoryMixin<T>(driver: DocumentScope<T>, entity: T): Repository<T>;
