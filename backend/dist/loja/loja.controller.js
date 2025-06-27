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
exports.LojaController = void 0;
const common_1 = require("@nestjs/common");
const loja_service_1 = require("./loja.service");
const create_loja_dto_1 = require("./dto/create-loja.dto");
const update_loja_dto_1 = require("./dto/update-loja.dto");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../auth/roles.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const roles_guard_1 = require("../auth/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let LojaController = class LojaController {
    lojaService;
    constructor(lojaService) {
        this.lojaService = lojaService;
    }
    createLoja(req, dto) {
        return this.lojaService.create(dto, req.user.userId);
    }
    findAll() {
        return this.lojaService.findAll();
    }
    findOne(id) {
        return this.lojaService.findOne(+id);
    }
    getLojaProdutos(id) {
        return this.lojaService.getLojaProdutos(+id);
    }
    getMyProdutos(id, req) {
        return this.lojaService.getLojaProdutos(req.user.userId);
    }
    getMyLoja(req) {
        return this.lojaService.myLoja(req.user.userId);
    }
    findAllByLoja(id, req) {
        return this.lojaService.findAComprasByLoja(req.user.userId);
    }
    getLojaEndereco(req) {
        return this.lojaService.getLojaEndereco(+req.user.UserId);
    }
    update(req, updateLojaDto) {
        return this.lojaService.update(req.user.UserId, updateLojaDto);
    }
    remove(id) {
        return this.lojaService.remove(+id);
    }
};
exports.LojaController = LojaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.MANAGER),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_loja_dto_1.CreateLojaDto]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "createLoja", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/produtos'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "getLojaProdutos", null);
__decorate([
    (0, common_1.Get)(':id/myprodutos'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.MANAGER),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "getMyProdutos", null);
__decorate([
    (0, common_1.Get)(':id/myloja'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.MANAGER),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "getMyLoja", null);
__decorate([
    (0, common_1.Get)(':id/compras'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.MANAGER),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "findAllByLoja", null);
__decorate([
    (0, common_1.Get)('/endereco'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.MANAGER),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "getLojaEndereco", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.MANAGER),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_loja_dto_1.UpdateLojaDto]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "remove", null);
exports.LojaController = LojaController = __decorate([
    (0, common_1.Controller)('loja'),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    __metadata("design:paramtypes", [loja_service_1.LojaService])
], LojaController);
//# sourceMappingURL=loja.controller.js.map