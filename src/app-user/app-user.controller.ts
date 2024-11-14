import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppUserService } from './app-user.service';
import { AppUserDTO } from './appUser.dto';

@Controller('app-user')
export class AppUserController {
  constructor(private readonly appUserService: AppUserService) {}

  @Get()
  findAll() {
    return this.appUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appUserService.findOne(+id);
  }

  @Post()
  create(@Body() appUserDTO: AppUserDTO) {
    return this.appUserService.create(appUserDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.appUserService.delete(+id);
  }
}
