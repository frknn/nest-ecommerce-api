import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { Merchant } from './entities/merchant.entity';

@Controller('merchants')
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) { }

  @Post()
  create(@Body() createMerchantDto: CreateMerchantDto): Promise<Merchant> {
    return this.merchantsService.create(createMerchantDto);
  }

  @Get()
  findAll(): Promise<Merchant[]> {
    return this.merchantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Merchant> {
    return this.merchantsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMerchantDto: UpdateMerchantDto): Promise<Merchant> {
    return this.merchantsService.update(id, updateMerchantDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<Merchant> {
    return this.merchantsService.remove(id);
  }
}
