import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth('Bearer')
@Controller('favoritos')
export class FavoritosController {
  constructor(private readonly favoritosService: FavoritosService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  create(@Body() createFavoritoDto: CreateFavoritoDto, @Req() req: any) {
    
    return this.favoritosService.create(createFavoritoDto,req.user.userId);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  findAll(@Req() req: any) {
    
    return this.favoritosService.findAll(req.user.userId);
  }

  @Get('/loja/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.USER)
  LojaIsFavorita(@Param('id') id: string, @Req() req: any) {
    return this.favoritosService.LojaIsFavorita(+id, req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoritoDto: UpdateFavoritoDto) {
    return this.favoritosService.update(+id, updateFavoritoDto);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.favoritosService.remove(+id, req.user.userId);
  }
}
