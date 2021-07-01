import { IsNotEmpty, IsNumber, IsUrl } from "class-validator";

export class CreateAssetDto {
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNumber()
  productId: number;
}
