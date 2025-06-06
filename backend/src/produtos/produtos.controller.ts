import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from 'src/user/entities/user.entity';
import { Roles } from 'src/auth/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';


@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('produtos')
@ApiBearerAuth('Bearer') 
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
   @UseGuards(AuthGuard('jwt'), RolesGuard) 
    @Roles(UserRole.ADMIN, UserRole.MANAGER)
  create(@Req() req: any,@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto,req.user.userId);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN)
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto, @Req() req: any) {
    return this.produtosService.update(+id, updateProdutoDto, req.user.userId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.produtosService.remove(+id,req.user.userId);
  }
  @Delete('admin/:id')
  @UseGuards(AuthGuard('jwt'))
  @Roles(UserRole.ADMIN)
  admRemove(@Param('id') id: string) {
    return this.produtosService.admRemove(+id);
  }
}
