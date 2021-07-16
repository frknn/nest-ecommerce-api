import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegistrationDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
