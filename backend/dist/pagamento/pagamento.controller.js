"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoController = void 0;
const common_1 = require("@nestjs/common");
const pagamento_service_1 = require("./pagamento.service");
const update_pagamento_dto_1 = require("./dto/update-pagamento.dto");
const user_entity_1 = require("../user/entities/user.entity");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
let PagamentoController = class PagamentoController {
    pagamentoService;
    constructor(pagamentoService) {
        this.pagamentoService = pagamentoService;
    }
    async updateStatus(id, updatePagamentoDto, req) {
        return this.pagamentoService.updateStatus(+id, updatePagamentoDto, req.user.userId);
    }
};
exports.PagamentoController = PagamentoController;
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.USER),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pagamento_dto_1.UpdatePagamentoDto, Object]),
    __metadata("design:returntype", Promise)
], PagamentoController.prototype, "updateStatus", null);
exports.PagamentoController = PagamentoController = __decorate([
    (0, common_1.Controller)('pagamento'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    __metadata("design:paramtypes", [pagamento_service_1.PagamentoService])
], PagamentoController);
//# sourceMappingURL=pagamento.controller.js.map