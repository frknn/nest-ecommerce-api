import { Module } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import {MerchantsController} from './merchants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './entities/merchant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  controllers: [MerchantsController],
  providers: [MerchantsService]
})
export class MerchantsModule {}
