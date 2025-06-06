import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('Bearer')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
   @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto, @Req() req: any) {
    return this.avaliacaoService.create(createAvaliacaoDto, req.user.userId);
  }

  @Get('loja/:lojaId')
  findAllByLoja(@Param('lojaId') lojaId: string) {
    return this.avaliacaoService.findAllByLoja(+lojaId);
  }

  @Get('user')
   @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.USER)
  findAllByUser(@Req() req: any) {
    return this.avaliacaoService.findAllByUser(req.user.userId); 
  }

  @Get(':id')
   @UseGuards(AuthGuard('jwt'), RolesGuard) 
  findOne(@Param('id') id: string) {
    return this.avaliacaoService.findOne(+id);
  }

  @Patch(':id')
   @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  update(@Param('id') id: string, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto, @Req() req: any) {
    return this.avaliacaoService.update(+id, updateAvaliacaoDto, req.user.userId);
  }

  @Delete(':id')
   @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  remove(@Param('id') id: string) {
    return this.avaliacaoService.remove(+id);
  }
}
