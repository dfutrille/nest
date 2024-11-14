import { Injectable } from '@nestjs/common';
import { AppUserDTO } from './appUser.dto';
import { AppUser } from './appUser.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AppUserService {
  constructor(
    @InjectRepository(AppUser)
    private readonly appUserRepository: Repository<AppUser>,
    private readonly authService: AuthService,
  ) {}

  async findAll(): Promise<AppUserDTO[]> {
    const appUsers = await this.appUserRepository.find();
    const response = appUsers.map((appUser) => {
      return plainToInstance(AppUserDTO, appUser, {
        excludeExtraneousValues: true,
      });
    });
    return response;
  }

  async findOne(id: number): Promise<AppUserDTO> {
    const appUser = await this.appUserRepository.findOneBy({ id });
    const appUserResponse = plainToInstance(AppUserDTO, appUser, {
      excludeExtraneousValues: true,
    });
    return appUserResponse;
  }

  async create(appUserDTO: AppUserDTO): Promise<AppUserDTO> {
    const password = this.authService.generateRandomPassword();
    let appUser = this.appUserRepository.create({
      ...appUserDTO,
      password: await this.authService.hashPassword(password),
    });
    appUser = await this.appUserRepository.save(appUser);
    const appUserResponse = plainToInstance(AppUserDTO, appUser, {
      excludeExtraneousValues: true,
    });
    return appUserResponse;
  }

  async delete(id: number): Promise<void> {
    this.appUserRepository.delete(id);
  }
}
