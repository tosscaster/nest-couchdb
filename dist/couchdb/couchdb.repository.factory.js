"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
const couchdb_repository_mixin_1 = require("./couchdb.repository.mixin");
const couchdb_utils_1 = require("./couchdb.utils");
class CouchDbRepositoryFactory {
    constructor(connection, config) {
        this.connection = connection;
        this.config = config;
    }
    static create(connection, config) {
        return new CouchDbRepositoryFactory(connection, config);
    }
    async create(entity) {
        const dbName = this.getDbName(entity);
        const checked = await this.checkDatabase(dbName);
        const driver = this.connection.use(dbName);
        return new (couchdb_repository_mixin_1.CouchDbRepositoryMixin(driver, entity))();
    }
    getDbName(entity) {
        const dbName = couchdb_utils_1.getEntityMetadata(entity);
        if (!dbName) {
            throw new exceptions_1.CouchDbException('Invalid database name in @Entity decorator');
        }
        return dbName;
    }
    async checkDatabase(dbName) {
        try {
            const database = await this.connection.db.get(dbName);
            return true;
        }
        catch (error) {
            if (this.config.sync) {
                return this.createDatabase(dbName);
            }
            throw error;
        }
    }
    async createDatabase(dbName) {
        const database = await this.connection.db.create(dbName);
        return true;
    }
}
exports.CouchDbRepositoryFactory = CouchDbRepositoryFactory;
//# sourceMappingURL=couchdb.repository.factory.js.map