import { IsOptional, IsString } from "class-validator";

export class UpdateMerchantDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  contactPhone: string;

  @IsString()
  @IsOptional()
  adress: string;
}
