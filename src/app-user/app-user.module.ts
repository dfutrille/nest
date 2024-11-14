import { Module } from '@nestjs/common';
import { AppUserService } from './app-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUser } from './appUser.entity';
import { AppUserController } from './app-user.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([AppUser])],
  controllers: [AppUserController],
  providers: [AppUserService, AuthService],
  exports: [AppUserService],
})
export class AppUserModule {}
