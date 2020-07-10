"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const utils_1 = require("./utils");
exports.InjectRepository = (entity) => common_1.Inject(utils_1.getRepositoryToken(entity));
exports.InjectConnection = () => common_1.Inject(utils_1.getConnectionToken());
//# sourceMappingURL=couchdb.decorators.js.map