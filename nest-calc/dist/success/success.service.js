"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessService = void 0;
const common_1 = require("@nestjs/common");
const success_entity_1 = require("./success.entity");
let SuccessService = class SuccessService {
    async createSuccess(id, timeTakenMs, created_at) {
        const succ = new success_entity_1.success();
        succ.id = id;
        succ.timeTakenMs = timeTakenMs;
        succ.created_at = created_at;
        await succ.save();
        return succ;
    }
};
SuccessService = __decorate([
    (0, common_1.Injectable)()
], SuccessService);
exports.SuccessService = SuccessService;
//# sourceMappingURL=success.service.js.map