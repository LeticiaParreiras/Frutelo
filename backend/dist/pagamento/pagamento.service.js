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
exports.PagamentoService = void 0;
const common_1 = require("@nestjs/common");
const pagamento_entity_1 = require("./entities/pagamento.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let PagamentoService = class PagamentoService {
    pagamentoRepository;
    constructor(pagamentoRepository) {
        this.pagamentoRepository = pagamentoRepository;
    }
    async updateStatus(idPagamento, updatepagamentoDto, userId) {
        const pagamento = await this.pagamentoRepository.findOne({
            where: { id: idPagamento, compra: { cliente: { id: userId } } },
            relations: ['compra'],
        });
        if (!pagamento)
            throw new common_1.NotFoundException('pagamento não encontrada');
        if (pagamento.status.id !== 1) {
            throw new common_1.ForbiddenException('A pagamento já foi processada ou cancelada.');
        }
        switch (updatepagamentoDto.statusId) {
            case 2:
                pagamento.status.id = 2;
                break;
            case 3:
                pagamento.status.id = 3;
                pagamento.compra.status.id = 3;
                await this.pagamentoRepository.save(pagamento.compra);
                break;
            default:
                throw new common_1.NotFoundException('Status indisponível');
        }
        return this.pagamentoRepository.save(pagamento);
    }
};
exports.PagamentoService = PagamentoService;
exports.PagamentoService = PagamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(pagamento_entity_1.Pagamento)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PagamentoService);
//# sourceMappingURL=pagamento.service.js.map