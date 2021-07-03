import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString, NotEquals, ValidateNested } from "class-validator";
import { CreateOptionDto } from "src/options/dto/create-option.dto";

export class CreateVariantDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @ArrayNotEmpty()
  @ValidateNested()
  @Type(() => CreateOptionDto)
  options: CreateOptionDto[]

}

