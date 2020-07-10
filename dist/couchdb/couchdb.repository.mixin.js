"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CouchDbRepositoryMixin(driver, entity) {
    class CouchDbRepository {
        constructor() {
            this.entity = entity;
        }
    }
    Object.assign(CouchDbRepository.prototype, driver);
    return CouchDbRepository;
}
exports.CouchDbRepositoryMixin = CouchDbRepositoryMixin;
//# sourceMappingURL=couchdb.repository.mixin.js.map