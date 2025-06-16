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
exports.LojaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const loja_entity_1 = require("./entities/loja.entity");
const Repository_1 = require("typeorm/repository/Repository");
const user_entity_1 = require("../user/entities/user.entity");
const compra_entity_1 = require("../compra/entities/compra.entity");
const endereco_entity_1 = require("../enderecos/entities/endereco.entity");
let LojaService = class LojaService {
    repository;
    userRepository;
    compraRepository;
    enderecoRepository;
    constructor(repository, userRepository, compraRepository, enderecoRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.compraRepository = compraRepository;
        this.enderecoRepository = enderecoRepository;
    }
    async create(dto, userId) {
        const user = await this.userRepository.findOne({ where: { id: userId },
            relations: ['loja'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`Usuário com ID ${userId} não encontrado`);
        }
        const loja = this.repository.create({
            ...dto,
            vendedor: user,
        });
        return this.repository.save(loja);
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOne({
            where: { id: id },
            relations: ['Endereco', 'produtos'],
        });
    }
    async getLojaProdutos(lojaId) {
        const loja = await this.repository.findOne({
            where: { id: lojaId },
            relations: ['produtos'],
        });
        if (!loja) {
            throw new common_1.NotFoundException(`Loja com ID ${lojaId} não encontrado`);
        }
        return loja.produtos;
    }
    async myLoja(userId) {
        const loja = await this.repository.findOne({
            where: { vendedor: { id: userId } },
        });
        if (!loja) {
            throw new common_1.NotFoundException(`Loja ainda não foi criada`);
        }
        return loja;
    }
    async getMyProdutos(userId) {
        const loja = await this.repository.findOne({
            where: { vendedor: { id: userId } },
            relations: ['produtos'],
        });
        if (!loja) {
            throw new common_1.NotFoundException(`Não foram encontrados produtos `);
        }
        return loja.produtos;
    }
    async findAComprasByLoja(userId) {
        const compras = await this.compraRepository.find({
            where: { loja: { vendedor: { id: userId } } },
            relations: ['loja', 'pagamento', 'produto', 'cliente'],
        });
        if (compras.length === 0) {
            throw new common_1.NotFoundException('Nenhuma compra encontrada para esta loja.');
        }
        return compras;
    }
    async getLojaEndereco(userId) {
        const endereco = await this.repository.findOne({
            where: {
                vendedor: { id: userId }
            },
            relations: ['enderecos'],
        });
        if (!endereco)
            return null;
        return endereco;
    }
    async update(userId, dto) {
        const loja = await this.repository.findOneBy({
            vendedor: { id: userId }
        });
        if (!loja)
            return null;
        this.repository.merge(loja, dto);
        return this.repository.save(loja);
    }
    async remove(lojaId) {
        const loja = await this.repository.findOneBy({ id: lojaId });
        if (!loja) {
            throw new common_1.NotFoundException(`Loja com ID ${lojaId} não encontrada`);
        }
        return this.repository.remove(loja);
    }
};
exports.LojaService = LojaService;
exports.LojaService = LojaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loja_entity_1.Loja)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(compra_entity_1.Compra)),
    __param(3, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        Repository_1.Repository,
        Repository_1.Repository,
        Repository_1.Repository])
], LojaService);
//# sourceMappingURL=loja.service.js.map