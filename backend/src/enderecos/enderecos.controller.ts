import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth('Bearer')
@Controller('enderecos')
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService) {}

  @Post('/user')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
    @Roles(UserRole.ADMIN, UserRole.USER)
  createForUser(@Req() req:any,@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecosService.createForUser(createEnderecoDto,req.user.userId);
  }
  @Post('/loja')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
    @Roles(UserRole.ADMIN, UserRole.MANAGER)
  createForLoja(@Req() req:any,@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecosService.createForLoja(createEnderecoDto,req.user.userId);
  }
  @Patch('/lojas')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.MANAGER, UserRole.ADMIN)
  updateLoja( @Body() updateEnderecoDto: UpdateEnderecoDto, @Req() req : any) {
    return this.enderecosService.updateLoja(req.user.userId , updateEnderecoDto);
  }
  
  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN)
  findAll() {
    return this.enderecosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enderecosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  update(@Param('id') id: string, @Body() updateEnderecoDto: UpdateEnderecoDto, @Req() req : any) {
    return this.enderecosService.update(+id, req.user.userId , updateEnderecoDto);
  }

  

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.USER)
  remove(@Param('id') id: string, @Req() req : any) {
    return this.enderecosService.remove(+id, req.user.userId);
  }
}
