"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nano = require("nano");
class CouchDbConnectionFactory {
    static async create(config) {
        const connection = nano(config);
        await connection.auth(config.username, config.userpass);
        return connection;
    }
}
exports.CouchDbConnectionFactory = CouchDbConnectionFactory;
//# sourceMappingURL=couchdb.connection.factory.js.map