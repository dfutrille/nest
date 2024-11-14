import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class AppUserDTO {
  @Expose()
  @IsOptional()
  id: number;
  @Expose()
  @IsNotEmpty({ message: 'El username no puede ser nulo' })
  username: string;
  @Expose()
  @IsNotEmpty({ message: 'El firstName no puede ser nulo' })
  firstName: string;
  @Expose()
  @IsNotEmpty({ message: 'El lastName no puede ser nulo' })
  lastName: string;
}
