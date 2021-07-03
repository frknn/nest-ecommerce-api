import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateVariantDto } from 'src/variants/dto/create-variant.dto';
import { UpdateVariantDto } from 'src/variants/dto/update-variant.dto';
import { Variant } from 'src/variants/entities/variant.entity';
import { VariantsService } from 'src/variants/variants.service';
import { UpdateResult } from 'typeorm';


@Controller('products/:productId/variants')
export class ProductVariantsController {
  constructor(private readonly variantsService: VariantsService) { }

  @Post()
  create(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() createVariantDto: CreateVariantDto
  ): Promise<Variant> {
    return this.variantsService.create(productId, createVariantDto);
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
    @Param('productId', ParseIntPipe) productId: number,
    @Param('variantId', ParseIntPipe) variantId: number,
    @Body() updateVariantDto: UpdateVariantDto
  ): Promise<Variant> {
    return this.variantsService.update(productId, variantId, updateVariantDto);
  }

  @Delete(':variantId')
  remove(
    @Param('productId', ParseIntPipe) productId: number,
    @Param('variantId', ParseIntPipe) variantId: number
  ): Promise<Variant> {
    return this.variantsService.remove(variantId, productId);
  }
}
