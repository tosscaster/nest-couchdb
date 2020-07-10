"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CouchDbCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const providers_1 = require("./providers");
let CouchDbCoreModule = CouchDbCoreModule_1 = class CouchDbCoreModule {
    static forRoot(config) {
        const providers = providers_1.createCouchDbConnectionProviders(config);
        return {
            module: CouchDbCoreModule_1,
            providers,
            exports: providers,
        };
    }
};
CouchDbCoreModule = CouchDbCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], CouchDbCoreModule);
exports.CouchDbCoreModule = CouchDbCoreModule;
//# sourceMappingURL=couchdb-core.module.js.map