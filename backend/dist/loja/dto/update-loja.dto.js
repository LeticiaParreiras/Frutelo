"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLojaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_loja_dto_1 = require("./create-loja.dto");
class UpdateLojaDto extends (0, mapped_types_1.PartialType)(create_loja_dto_1.CreateLojaDto) {
}
exports.UpdateLojaDto = UpdateLojaDto;
//# sourceMappingURL=update-loja.dto.js.map