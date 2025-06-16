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
exports.AvaliacaoService = void 0;
const common_1 = require("@nestjs/common");
const avaliacao_entity_1 = require("./entities/avaliacao.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const loja_entity_1 = require("../loja/entities/loja.entity");
let AvaliacaoService = class AvaliacaoService {
    repository;
    userrepository;
    lojarepository;
    constructor(repository, userrepository, lojarepository) {
        this.repository = repository;
        this.userrepository = userrepository;
        this.lojarepository = lojarepository;
    }
    async create(dto, userId) {
        const user = await this.userrepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.ForbiddenException('Erro: Houve um erro ao localizar Usuário');
        }
        const loja = await this.lojarepository.findOne({ where: { id: dto.lojaId } });
        if (!loja) {
            throw new common_1.ForbiddenException('Erro: Houve um erro ao localizar Loja');
        }
        const avaliacao = this.repository.create({
            ...dto,
            user: user,
            loja: loja,
            data: new Date()
        });
        return this.repository.save(avaliacao);
    }
    async findAllByLoja(lojaId) {
        const loja = await this.lojarepository.find({ where: { id: lojaId } });
        if (!loja) {
            throw new common_1.ForbiddenException('Erro: Houve um erro ao localizar Loja');
        }
        const avaliacoes = await this.repository.find({
            where: { loja: loja },
            relations: ['user', 'loja'],
        });
        return avaliacoes;
    }
    async findAllByUser(userId) {
        const avaliacoes = await this.repository.find({
            where: { user: { id: userId } },
            relations: ['user', 'loja']
        });
        if (!avaliacoes || avaliacoes.length === 0) {
            throw new common_1.ForbiddenException('Erro: Nenhuma avaliação encontrada para este usuário');
        }
        return avaliacoes;
    }
    async findOne(id) {
        const avaliacao = await this.repository.findOne({ where: { id: id }, relations: ['user', 'loja'] });
        if (!avaliacao) {
            throw new common_1.ForbiddenException('Erro: Avaliação não encontrada');
        }
        return avaliacao;
    }
    async update(id, dto, userId) {
        const avaliacao = await this.repository.findOne({ where: { id: id, user: { id: userId } } });
        if (!avaliacao) {
            throw new common_1.ForbiddenException('Erro: Avaliação não encontrada ou não pertence ao usuário');
        }
        this.repository.merge(avaliacao, dto);
        avaliacao.data = new Date();
        return this.repository.save(avaliacao);
    }
    async remove(id) {
        const avaliacao = await this.repository.findOne({ where: { id: id } });
        if (!avaliacao) {
            throw new common_1.ForbiddenException('Erro: Avaliação não encontrada');
        }
        return this.repository.remove(avaliacao);
    }
};
exports.AvaliacaoService = AvaliacaoService;
exports.AvaliacaoService = AvaliacaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(avaliacao_entity_1.Avaliacao)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(loja_entity_1.Loja)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AvaliacaoService);
//# sourceMappingURL=avaliacao.service.js.map