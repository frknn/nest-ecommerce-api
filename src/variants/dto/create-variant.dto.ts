import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateOptionDto } from "src/options/dto/create-option.dto";

export class CreateVariantDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => CreateOptionDto)
  options: CreateOptionDto[]

}

