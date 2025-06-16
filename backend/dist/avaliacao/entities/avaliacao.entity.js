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
exports.Avaliacao = void 0;
const loja_entity_1 = require("../../loja/entities/loja.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Avaliacao = class Avaliacao {
    id;
    nota;
    comentario;
    loja;
    user;
    data;
};
exports.Avaliacao = Avaliacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Avaliacao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', width: 1 }),
    __metadata("design:type", Number)
], Avaliacao.prototype, "nota", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Avaliacao.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => loja_entity_1.Loja, (loja) => loja.avaliacao),
    __metadata("design:type", loja_entity_1.Loja)
], Avaliacao.prototype, "loja", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.avaliacao),
    __metadata("design:type", user_entity_1.User)
], Avaliacao.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Avaliacao.prototype, "data", void 0);
exports.Avaliacao = Avaliacao = __decorate([
    (0, typeorm_1.Entity)()
], Avaliacao);
//# sourceMappingURL=avaliacao.entity.js.map