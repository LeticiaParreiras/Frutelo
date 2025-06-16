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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
const avaliacao_entity_1 = require("../../avaliacao/entities/avaliacao.entity");
const compra_entity_1 = require("../../compra/entities/compra.entity");
const endereco_entity_1 = require("../../enderecos/entities/endereco.entity");
const favorito_entity_1 = require("../../favoritos/entities/favorito.entity");
const produto_entity_1 = require("../../produtos/entities/produto.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Loja = class Loja {
    id;
    nome;
    descricao;
    produtos;
    vendedor;
    Endereco;
    compras;
    avaliacao;
    favorito;
};
exports.Loja = Loja;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Loja.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Loja.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Loja.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produto_entity_1.Produto, (produto) => produto.loja),
    __metadata("design:type", Array)
], Loja.prototype, "produtos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, vendedor => vendedor.loja, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Loja.prototype, "vendedor", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => endereco_entity_1.Endereco, (Endereco) => Endereco.loja, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'endereco_id' }),
    __metadata("design:type", endereco_entity_1.Endereco)
], Loja.prototype, "Endereco", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => compra_entity_1.Compra, (compras) => compras.loja),
    __metadata("design:type", Array)
], Loja.prototype, "compras", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => avaliacao_entity_1.Avaliacao, (avaliacao) => avaliacao.loja),
    __metadata("design:type", Array)
], Loja.prototype, "avaliacao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorito_entity_1.Favorito, (favorito) => favorito.Loja),
    __metadata("design:type", Array)
], Loja.prototype, "favorito", void 0);
exports.Loja = Loja = __decorate([
    (0, typeorm_1.Entity)("Loja")
], Loja);
//# sourceMappingURL=loja.entity.js.map