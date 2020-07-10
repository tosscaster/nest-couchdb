"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.getConnectionToken = () => constants_1.COUCHDB_CONNECTION_TOKEN;
exports.getRepositoryFactoryToken = () => constants_1.COUCHDB_REPOSITORY_FACTORY_TOKEN;
exports.getRepositoryToken = (entity) => `${entity.name}_REPOSITORY_TOKEN`;
//# sourceMappingURL=utils.js.map