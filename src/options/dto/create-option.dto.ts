import { IsNotEmpty, IsString } from "class-validator";

export class CreateOptionDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
