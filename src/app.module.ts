import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUserModule } from './app-user/app-user.module';
import { AppUserController } from './app-user/app-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUser } from './app-user/appUser.entity';
import { APP_PIPE } from '@nestjs/core';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'nest',
      password: '123456',
      database: 'nest',
      entities: [AppUser],
      synchronize: true,
      logging: true,
    }),
    AppUserModule,
  ],
  controllers: [AppController, AppUserController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true, // Solo permite propiedades que están definidas en el DTO
        transform: true, // Transforma los datos entrantes en instancias de clases DTO
        transformOptions: {
          enableImplicitConversion: true, // Habilita conversiones implícitas
        },
        forbidNonWhitelisted: true, // Lanza un error si hay propiedades no permitidas
        validationError: {
          target: false, // No incluir el objeto que falló la validación en el error
        },
      }),
    },
    AuthService,
  ],
})
export class AppModule {}
