import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('compra')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth('Bearer')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  create(@Req() req: any,@Body() createCompraDto: CreateCompraDto) {
    return this.compraService.create(createCompraDto,req.user.userId);

  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN)
  findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compraService.findOne(+id);
  }

 /* @Get('/loja')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  findAllByLoja(@Req() req: any) {
    return this.compraService.findAllByLoja(req.user.sub);
  }*/

  /*@Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  update(@Param('id') id: string, @Body() updateCompraDto: UpdateCompraDto) {
    return this.compraService.update(+id, updateCompraDto);
  }*/

  @Patch(':id/status')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN,UserRole.USER)
  async updateStatus(@Param('id') id: string, @Body() updateCompraDto: UpdateCompraDto , @Req() req: any){
    return this.compraService.updateStatus(+id,req.user.userId,updateCompraDto)
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.compraService.remove(+id);
  }
}
