import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { LojaService } from './loja.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('loja')
@ApiBearerAuth('Bearer')
export class LojaController {
  constructor(private readonly lojaService: LojaService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  createLoja(@Req() req: any, @Body() dto: CreateLojaDto)  {
    console.log(req.user);
    return this.lojaService.create(dto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.lojaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lojaService.findOne(+id);
  }
  @Get(':id/produtos')
  getLojaProdutos(@Param('id') id: string) {
    return this.lojaService.getLojaProdutos(+id);
  }
  @Get(':id/myprodutos')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  getMyProdutos(@Param('id') id: string,@Req() req: any) {
    return this.lojaService.getMyProdutos(req.user.userId);
  }

  @Get(':id/myloja')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  getMyLoja(@Req() req: any) {
    return this.lojaService.myLoja(req.user.userId);
  }

  /*
  @Get(':id/compras') //por algum motivo se não passar o id, não funciona
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  findAllByLoja(@Param('id') id: string, @Req() req: any) {
    return this.lojaService.findAComprasByLoja(req.user.userId);
  }
  */
  @Get('/endereco')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  getLojaEndereco(@Req() req: any){
    return this.lojaService.getLojaEndereco(+req.user.UserId)
  }

  @Patch()
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  update(@Req() req: any, @Body() updateLojaDto: UpdateLojaDto) {
    return this.lojaService.update(req.user.userId, updateLojaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN,)
  remove(@Param('id') id: string) {
    return this.lojaService.remove(+id);
  }
}
