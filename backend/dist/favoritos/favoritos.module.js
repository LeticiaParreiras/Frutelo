"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const favoritos_service_1 = require("./favoritos.service");
const favoritos_controller_1 = require("./favoritos.controller");
const favorito_entity_1 = require("./entities/favorito.entity");
const loja_entity_1 = require("../loja/entities/loja.entity");
const user_entity_1 = require("../user/entities/user.entity");
let FavoritosModule = class FavoritosModule {
};
exports.FavoritosModule = FavoritosModule;
exports.FavoritosModule = FavoritosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([favorito_entity_1.Favorito, loja_entity_1.Loja, user_entity_1.User])],
        controllers: [favoritos_controller_1.FavoritosController],
        providers: [favoritos_service_1.FavoritosService],
    })
], FavoritosModule);
//# sourceMappingURL=favoritos.module.js.map