"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const couchdb_1 = require("../couchdb");
const utils_1 = require("./utils");
exports.createCouchDbConnectionProviders = (config) => [
    {
        provide: utils_1.getConnectionToken(),
        useFactory: async () => couchdb_1.CouchDbConnectionFactory.create(config),
    },
    {
        provide: utils_1.getRepositoryFactoryToken(),
        useFactory: (connection) => couchdb_1.CouchDbRepositoryFactory.create(connection, config),
        inject: [utils_1.getConnectionToken()],
    },
];
exports.createCouchDbRepositoryProvider = (entity) => ({
    provide: utils_1.getRepositoryToken(entity),
    useFactory: async (repositoryFactory) => repositoryFactory.create(entity),
    inject: [utils_1.getRepositoryFactoryToken()],
});
exports.createCouchDbProviders = (entities) => entities.map(exports.createCouchDbRepositoryProvider);
//# sourceMappingURL=providers.js.map