"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const couchdb_constants_1 = require("../couchdb.constants");
exports.Entity = (db) => (target) => {
    Reflect.defineMetadata(couchdb_constants_1.COUCHDB_ENTITY_METADATA, db, target);
};
//# sourceMappingURL=entity.decorator.js.map