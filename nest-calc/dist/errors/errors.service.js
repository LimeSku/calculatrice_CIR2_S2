"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsService = void 0;
const common_1 = require("@nestjs/common");
const errors_entity_1 = require("./errors.entity");
let ErrorsService = class ErrorsService {
    async createError(id, timeTakenMs, created_at) {
        const err = new errors_entity_1.errors();
        err.id = id;
        err.timeTakenMs = timeTakenMs;
        err.created_at = created_at;
        await err.save();
        return err;
    }
};
ErrorsService = __decorate([
    (0, common_1.Injectable)()
], ErrorsService);
exports.ErrorsService = ErrorsService;
//# sourceMappingURL=errors.service.js.map