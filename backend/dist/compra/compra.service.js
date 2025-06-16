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
exports.CompraService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const compra_entity_1 = require("./entities/compra.entity");
const typeorm_2 = require("typeorm");
const pagamento_entity_1 = require("../pagamento/entities/pagamento.entity");
const produto_entity_1 = require("../produtos/entities/produto.entity");
const user_entity_1 = require("../user/entities/user.entity");
const endereco_entity_1 = require("../enderecos/entities/endereco.entity");
const loja_entity_1 = require("../loja/entities/loja.entity");
let CompraService = class CompraService {
    compraRepository;
    pagamentoRepository;
    produtoRepository;
    userRepository;
    enderecoRepository;
    lojaRepository;
    constructor(compraRepository, pagamentoRepository, produtoRepository, userRepository, enderecoRepository, lojaRepository) {
        this.compraRepository = compraRepository;
        this.pagamentoRepository = pagamentoRepository;
        this.produtoRepository = produtoRepository;
        this.userRepository = userRepository;
        this.enderecoRepository = enderecoRepository;
        this.lojaRepository = lojaRepository;
    }
    async create(dto, userId) {
        const produto = await this.produtoRepository.findOne({
            where: { id: dto.produtoId },
            relations: ['loja'],
        });
        if (!produto) {
            throw new common_1.NotFoundException('Produto não encontrado');
        }
        const cliente = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!cliente) {
            throw new common_1.ForbiddenException('Erro: Usuário não autorizado a realizar compras.');
        }
        const endereco = await this.enderecoRepository.findOne({
            where: {
                id: dto.enderecoId,
                cliente: { id: userId }
            },
            relations: ['cliente']
        });
        if (!endereco) {
            throw new common_1.ForbiddenException('O endereço não pertence ao usuário autenticado.');
        }
        const valorTotal = produto.preco * dto.quantidade;
        const pagamento = this.pagamentoRepository.create({
            metodo: dto.pagamento.metodo,
            valor: valorTotal,
            status: { id: 1 },
        });
        const compra = this.compraRepository.create({
            data: new Date(),
            status: { id: 1 },
            quantidade: dto.quantidade,
            produto: produto,
            cliente: cliente,
            pagamento: pagamento,
            Endereco: endereco,
            loja: produto.loja,
        });
        return await this.compraRepository.save(compra);
    }
    async findAll() {
        return await this.compraRepository.find({ relations: ['pagamento', 'produto', 'cliente', 'loja'] });
    }
    async findOne(id) {
        const compra = await this.compraRepository.findOne({
            where: { id },
            relations: ['pagamento', 'produto'],
        });
        return compra;
    }
    async updateStatus(idCompra, userId, updateCompraDto) {
        const compra = await this.compraRepository.findOne({
            where: { id: idCompra, cliente: { id: userId } },
            relations: ['pagamento'],
        });
        if (!compra)
            throw new common_1.NotFoundException('Compra não encontrada');
        if (compra.status.id !== 1) {
            throw new common_1.ForbiddenException('A compra já foi processada ou cancelada.');
        }
        switch (updateCompraDto.statusId) {
            case 2:
                if (compra.pagamento.status.id !== 2) {
                    throw new common_1.ForbiddenException('O pagamento ainda não foi concluído.');
                }
                compra.status.id = 2;
                break;
            case 3:
                compra.status.id = 3;
                compra.pagamento.status.id = 3;
                await this.pagamentoRepository.save(compra.pagamento);
                break;
            default:
                throw new common_1.NotFoundException('Status indisponível');
        }
        return this.compraRepository.save(compra);
    }
    async remove(id) {
        const compra = await this.findOne(id);
        if (!compra)
            return null;
        return await this.compraRepository.remove(compra);
    }
};
exports.CompraService = CompraService;
exports.CompraService = CompraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(compra_entity_1.Compra)),
    __param(1, (0, typeorm_1.InjectRepository)(pagamento_entity_1.Pagamento)),
    __param(2, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(4, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __param(5, (0, typeorm_1.InjectRepository)(loja_entity_1.Loja)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CompraService);
//# sourceMappingURL=compra.service.js.map