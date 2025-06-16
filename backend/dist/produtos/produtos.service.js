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
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const produto_entity_1 = require("./entities/produto.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const loja_entity_1 = require("../loja/entities/loja.entity");
let ProdutosService = class ProdutosService {
    repository;
    lojaRepository;
    constructor(repository, lojaRepository) {
        this.repository = repository;
        this.lojaRepository = lojaRepository;
    }
    async create(dto, vendedorId) {
        const loja = await this.lojaRepository.findOne({
            where: { vendedor: { id: vendedorId }
            },
            relations: ['vendedor']
        });
        if (!loja) {
            throw new Error('Erro ao buscar loja');
        }
        const produto = this.repository.create({
            ...dto,
            loja: { id: loja.id },
        });
        return this.repository.save(produto);
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOneBy({ id });
    }
    async update(id, dto, vendedorId) {
        const produto = await this.repository.findOne({
            where: {
                id: id,
                loja: { vendedor: { id: vendedorId } }
            }
        });
        if (!produto)
            throw new Error('Produto não encontrado.');
        this.repository.merge(produto, dto);
        return this.repository.save(produto);
    }
    async remove(id, vendedorId) {
        const produto = await this.repository.findOne({
            where: {
                id: id,
                loja: { vendedor: { id: vendedorId } }
            }
        });
        if (!produto)
            throw new Error('Produto não encontrado.');
        return this.repository.remove(produto);
    }
    async admRemove(id) {
        const produto = await this.repository.findOneBy({ id: id });
        if (!produto)
            throw new Error('Produto não encontrado.');
        return this.repository.remove(produto);
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(produto_entity_1.Produto)),
    __param(1, (0, typeorm_2.InjectRepository)(loja_entity_1.Loja)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map