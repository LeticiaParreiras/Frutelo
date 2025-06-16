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
exports.Compra = void 0;
const typeorm_1 = require("typeorm");
const pagamento_entity_1 = require("../../pagamento/entities/pagamento.entity");
const produto_entity_1 = require("../../produtos/entities/produto.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const endereco_entity_1 = require("../../enderecos/entities/endereco.entity");
const loja_entity_1 = require("../../loja/entities/loja.entity");
const status_entity_1 = require("../../status/entities/status.entity");
let Compra = class Compra {
    id;
    data;
    quantidade;
    pagamento;
    produto;
    loja;
    cliente;
    Endereco;
    status;
};
exports.Compra = Compra;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Compra.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Compra.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Compra.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pagamento_entity_1.Pagamento, pagamento => pagamento.compra, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", pagamento_entity_1.Pagamento)
], Compra.prototype, "pagamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => produto_entity_1.Produto, (produto) => produto.Compras, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "produtoId" }),
    __metadata("design:type", produto_entity_1.Produto)
], Compra.prototype, "produto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => loja_entity_1.Loja, (loja) => loja.compras, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'lojaId' }),
    __metadata("design:type", loja_entity_1.Loja)
], Compra.prototype, "loja", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (cliente) => cliente.Compras),
    (0, typeorm_1.JoinColumn)({ name: 'clienteId' }),
    __metadata("design:type", user_entity_1.User)
], Compra.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => endereco_entity_1.Endereco, (endereco) => endereco.compras, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'enderecoId' }),
    __metadata("design:type", endereco_entity_1.Endereco)
], Compra.prototype, "Endereco", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_entity_1.Status, (status) => status.compras, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'status_id' }),
    __metadata("design:type", status_entity_1.Status)
], Compra.prototype, "status", void 0);
exports.Compra = Compra = __decorate([
    (0, typeorm_1.Entity)()
], Compra);
//# sourceMappingURL=compra.entity.js.map