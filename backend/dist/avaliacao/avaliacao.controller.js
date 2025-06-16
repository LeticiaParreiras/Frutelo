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
exports.AvaliacaoController = void 0;
const common_1 = require("@nestjs/common");
const avaliacao_service_1 = require("./avaliacao.service");
const create_avaliacao_dto_1 = require("./dto/create-avaliacao.dto");
const update_avaliacao_dto_1 = require("./dto/update-avaliacao.dto");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../auth/roles.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const roles_guard_1 = require("../auth/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let AvaliacaoController = class AvaliacaoController {
    avaliacaoService;
    constructor(avaliacaoService) {
        this.avaliacaoService = avaliacaoService;
    }
    create(createAvaliacaoDto, req) {
        return this.avaliacaoService.create(createAvaliacaoDto, req.user.userId);
    }
    findAllByLoja(lojaId) {
        return this.avaliacaoService.findAllByLoja(+lojaId);
    }
    findAllByUser(req) {
        return this.avaliacaoService.findAllByUser(req.user.userId);
    }
    findOne(id) {
        return this.avaliacaoService.findOne(+id);
    }
    update(id, updateAvaliacaoDto, req) {
        return this.avaliacaoService.update(+id, updateAvaliacaoDto, req.user.userId);
    }
    remove(id) {
        return this.avaliacaoService.remove(+id);
    }
};
exports.AvaliacaoController = AvaliacaoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.USER),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_avaliacao_dto_1.CreateAvaliacaoDto, Object]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('loja/:lojaId'),
    __param(0, (0, common_1.Param)('lojaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "findAllByLoja", null);
__decorate([
    (0, common_1.Get)('user'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.USER),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "findAllByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.USER),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_avaliacao_dto_1.UpdateAvaliacaoDto, Object]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.USER),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "remove", null);
exports.AvaliacaoController = AvaliacaoController = __decorate([
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Controller)('avaliacao'),
    __metadata("design:paramtypes", [avaliacao_service_1.AvaliacaoService])
], AvaliacaoController);
//# sourceMappingURL=avaliacao.controller.js.map