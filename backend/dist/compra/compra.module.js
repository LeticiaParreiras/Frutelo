"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraModule = void 0;
const common_1 = require("@nestjs/common");
const compra_service_1 = require("./compra.service");
const compra_controller_1 = require("./compra.controller");
const typeorm_1 = require("@nestjs/typeorm");
const compra_entity_1 = require("./entities/compra.entity");
const pagamento_entity_1 = require("../pagamento/entities/pagamento.entity");
const produto_entity_1 = require("../produtos/entities/produto.entity");
const user_entity_1 = require("../user/entities/user.entity");
const endereco_entity_1 = require("../enderecos/entities/endereco.entity");
const loja_entity_1 = require("../loja/entities/loja.entity");
let CompraModule = class CompraModule {
};
exports.CompraModule = CompraModule;
exports.CompraModule = CompraModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([compra_entity_1.Compra, pagamento_entity_1.Pagamento, produto_entity_1.Produto, user_entity_1.User, endereco_entity_1.Endereco, loja_entity_1.Loja])],
        controllers: [compra_controller_1.CompraController],
        providers: [compra_service_1.CompraService],
    })
], CompraModule);
//# sourceMappingURL=compra.module.js.map