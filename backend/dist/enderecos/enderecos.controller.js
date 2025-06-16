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
exports.EnderecosController = void 0;
const common_1 = require("@nestjs/common");
const enderecos_service_1 = require("./enderecos.service");
const create_endereco_dto_1 = require("./dto/create-endereco.dto");
const update_endereco_dto_1 = require("./dto/update-endereco.dto");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../auth/roles.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const roles_guard_1 = require("../auth/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let EnderecosController = class EnderecosController {
    enderecosService;
    constructor(enderecosService) {
        this.enderecosService = enderecosService;
    }
    createForUser(req, createEnderecoDto) {
        return this.enderecosService.createForUser(createEnderecoDto, req.user.userId);
    }
    createForLoja(req, createEnderecoDto) {
        return this.enderecosService.createForLoja(createEnderecoDto, req.user.userId);
    }
    updateLoja(updateEnderecoDto, req) {
        return this.enderecosService.updateLoja(req.user.userId, updateEnderecoDto);
    }
    findAll() {
        return this.enderecosService.findAll();
    }
    findOne(id) {
        return this.enderecosService.findOne(+id);
    }
    update(id, updateEnderecoDto, req) {
        return this.enderecosService.update(+id, req.user.userId, updateEnderecoDto);
    }
    remove(id, req) {
        return this.enderecosService.remove(+id, req.user.userId);
    }
};
exports.EnderecosController = EnderecosController;
__decorate([
    (0, common_1.Post)('/user'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.USER),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_endereco_dto_1.CreateEnderecoDto]),
    __metadata("design:returntype", void 0)
], EnderecosController.prototype, "createForUser", null);
__decorate([
    (0, common_1.Post)('/loja'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.MANAGER),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_endereco_dto_1.CreateEnderecoDto]),
    __metadata("design:returntype", void 0)
], EnderecosController.prototype, "createForLoja", null);
__decorate([
    (0, common_1.Patch)('/lojas'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.MANAGER, user_entity_1.UserRole.ADMIN),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_endereco_dto_1.UpdateEnderecoDto, Object]),
    __metadata("design:returntype", void 0)
], EnderecosController.prototype, "updateLoja", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnderecosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EnderecosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.USER),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_endereco_dto_1.UpdateEnderecoDto, Object]),
    __metadata("design:returntype", void 0)
], EnderecosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.MANAGER, user_entity_1.UserRole.USER),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EnderecosController.prototype, "remove", null);
exports.EnderecosController = EnderecosController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)('Bearer'),
    (0, common_1.Controller)('enderecos'),
    __metadata("design:paramtypes", [enderecos_service_1.EnderecosService])
], EnderecosController);
//# sourceMappingURL=enderecos.controller.js.map