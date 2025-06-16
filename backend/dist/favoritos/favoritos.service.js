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
exports.FavoritosService = void 0;
const common_1 = require("@nestjs/common");
const favorito_entity_1 = require("./entities/favorito.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const loja_entity_1 = require("../loja/entities/loja.entity");
let FavoritosService = class FavoritosService {
    repository;
    userRepository;
    lojaRepository;
    constructor(repository, userRepository, lojaRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.lojaRepository = lojaRepository;
    }
    async create(dto, userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.ForbiddenException('Erro: Houve um erro ao localizar Usuário');
        }
        const loja = await this.lojaRepository.findOne({ where: { id: dto.idLoja } });
        if (!loja) {
            throw new common_1.ForbiddenException('Erro: Houve um erro ao localizar loja');
        }
        const fav = this.repository.create({
            ...dto,
            user: user,
            Loja: loja,
        });
        return this.repository.save(fav);
    }
    async findAll(userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.ForbiddenException('Erro: Houve um erro ao localizar Usuário');
        }
        const favs = await this.repository.find({ where: { user: user }, relations: ['Loja', 'user'] });
        return favs;
    }
    findOne(id) {
        return `This action returns a #${id} favorito`;
    }
    update(id, updateFavoritoDto) {
        return `This action updates a #${id} favorito`;
    }
    async remove(lojaId, userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.ForbiddenException('Erro: Houve um erro ao localizar Usuário');
        }
        const loja = await this.lojaRepository.findOne({ where: { id: lojaId } });
        if (!loja) {
            throw new common_1.ForbiddenException('Erro: Houve um erro ao localizar loja');
        }
        const fav = await this.repository.find({
            where: { user: user, Loja: loja }
        });
        if (fav.length === 0)
            throw new common_1.NotFoundException('Favorito não encontrado');
        return this.repository.remove(fav);
    }
};
exports.FavoritosService = FavoritosService;
exports.FavoritosService = FavoritosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(favorito_entity_1.Favorito)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_2.InjectRepository)(loja_entity_1.Loja)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], FavoritosService);
//# sourceMappingURL=favoritos.service.js.map