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
exports.Pagamento = void 0;
const typeorm_1 = require("typeorm");
const compra_entity_1 = require("../../compra/entities/compra.entity");
const status_entity_1 = require("../../status/entities/status.entity");
let Pagamento = class Pagamento {
    id;
    metodo;
    valor;
    compra;
    status;
};
exports.Pagamento = Pagamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pagamento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pagamento.prototype, "metodo", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Pagamento.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => compra_entity_1.Compra, compra => compra.pagamento),
    __metadata("design:type", compra_entity_1.Compra)
], Pagamento.prototype, "compra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_entity_1.Status, status => status.pagamentos, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'status_id' }),
    __metadata("design:type", status_entity_1.Status)
], Pagamento.prototype, "status", void 0);
exports.Pagamento = Pagamento = __decorate([
    (0, typeorm_1.Entity)()
], Pagamento);
//# sourceMappingURL=pagamento.entity.js.map