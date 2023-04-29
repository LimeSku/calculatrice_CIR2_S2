"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const errors_entity_1 = require("../errors/errors.entity");
const success_entity_1 = require("../success/success.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'calcweb',
    entities: [errors_entity_1.errors, success_entity_1.success],
};
//# sourceMappingURL=typeorm.config.js.map