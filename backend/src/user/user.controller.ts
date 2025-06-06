import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, BadRequestException } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('users')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/compras')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  async getUserCompras(@Req() req: any) {
    return this.userService.getUserCompras(req.user.userId);
  }

  @Get ('/endereco')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN, UserRole.USER)
  async getUserEnderecos (@Req() req: any){
    return this.userService.getUserEnderecos(req.user.userId)
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.userService.findOne(req.user.userId);
  }



}