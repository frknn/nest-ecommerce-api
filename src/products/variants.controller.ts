import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateVariantDto } from 'src/variants/dto/create-variant.dto';
import { UpdateVariantDto } from 'src/variants/dto/update-variant.dto';
import { Variant } from 'src/variants/entities/variant.entity';
import { VariantsService } from 'src/variants/variants.service';


@Controller('products/:productId/variants')
export class ProductVariantsController {
  constructor(private readonly variantsService: VariantsService) { }

  @Post()
  create(
    @Body() createVariantDto: CreateVariantDto,
    @Param('productId', ParseIntPipe) productId: number
  ): Promise<Variant> {
    return this.variantsService.create(createVariantDto, productId);
  }

  @Get()
  findAll(
    @Param('productId', ParseIntPipe) productId: number
  ): Promise<Variant[]> {
    return this.variantsService.findAll(productId);
  }

  @Get(':variantId')
  findOne(
    @Param('productId', ParseIntPipe) productId: number,
    @Param('variantId', ParseIntPipe) variantId: number
  ) {
    return this.variantsService.findOne(productId, variantId);
  }

  @Patch(':variantId')
  update(
    @Body() updateVariantDto: UpdateVariantDto,
    @Param('productId', ParseIntPipe) productId: number,
    @Param('variantId', ParseIntPipe) variantId: number
  ) {
    return this.variantsService.update(variantId, updateVariantDto);
  }

  @Delete(':variantId')
  remove(
    @Param('productId', ParseIntPipe) productId: number,
    @Param('variantId', ParseIntPipe) variantId: number
  ) {
    return this.variantsService.remove(variantId, productId);
  }
}
