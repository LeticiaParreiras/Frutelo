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
exports.User = exports.UserRole = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const loja_entity_1 = require("../../loja/entities/loja.entity");
const compra_entity_1 = require("../../compra/entities/compra.entity");
const endereco_entity_1 = require("../../enderecos/entities/endereco.entity");
const avaliacao_entity_1 = require("../../avaliacao/entities/avaliacao.entity");
const favorito_entity_1 = require("../../favoritos/entities/favorito.entity");
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "USER";
    UserRole["MANAGER"] = "MANAGER";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole || (exports.UserRole = UserRole = {}));
let User = class User {
    id;
    nomeUsuario;
    nome;
    senha;
    email;
    role;
    loja;
    Compras;
    endereco;
    avaliacao;
    favorito;
    async hashPassword() {
        if (this.senha) {
            this.senha = await bcrypt.hash(this.senha, 10);
        }
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "nomeUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: UserRole.USER
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => loja_entity_1.Loja, loja => loja.vendedor),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", loja_entity_1.Loja)
], User.prototype, "loja", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => compra_entity_1.Compra, (Compra) => Compra.cliente),
    __metadata("design:type", Array)
], User.prototype, "Compras", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => endereco_entity_1.Endereco, (endereco) => endereco.cliente),
    __metadata("design:type", Array)
], User.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => avaliacao_entity_1.Avaliacao, (avaliacao) => avaliacao.user),
    __metadata("design:type", Array)
], User.prototype, "avaliacao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorito_entity_1.Favorito, (favorito) => favorito.user),
    __metadata("design:type", Array)
], User.prototype, "favorito", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map