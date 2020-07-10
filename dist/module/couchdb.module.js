"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CouchDbModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const couchdb_core_module_1 = require("./couchdb-core.module");
const providers_1 = require("./providers");
let CouchDbModule = CouchDbModule_1 = class CouchDbModule {
    static forRoot(config) {
        return {
            module: CouchDbModule_1,
            imports: [couchdb_core_module_1.CouchDbCoreModule.forRoot(config)],
        };
    }
    static forFeature(entities) {
        const providers = providers_1.createCouchDbProviders(entities);
        return {
            module: CouchDbModule_1,
            providers,
            exports: providers,
        };
    }
};
CouchDbModule = CouchDbModule_1 = __decorate([
    common_1.Module({})
], CouchDbModule);
exports.CouchDbModule = CouchDbModule;
//# sourceMappingURL=couchdb.module.js.map