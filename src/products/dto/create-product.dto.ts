import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsUrl()
  smallImage: string;
}
