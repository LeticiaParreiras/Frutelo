"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const loja_entity_1 = require("../loja/entities/loja.entity");
const compra_entity_1 = require("../compra/entities/compra.entity");
const loja_module_1 = require("../loja/loja.module");
const endereco_entity_1 = require("../enderecos/entities/endereco.entity");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, loja_entity_1.Loja, compra_entity_1.Compra, endereco_entity_1.Endereco]),
            loja_module_1.LojaModule],
        controllers: [user_controller_1.UsersController],
        providers: [user_service_1.UsersService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map