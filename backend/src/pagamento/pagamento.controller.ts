import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { UserRole } from 'src/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('pagamento')
@ApiBearerAuth('Bearer')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}
  
  @Patch(':id/status')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.USER)
  async updateStatus(@Param('id') id: string, @Body() updatePagamentoDto: UpdatePagamentoDto,@Req() req: any,) {
    return this.pagamentoService.updateStatus(+id, updatePagamentoDto, req.user.userId);
  }
}
