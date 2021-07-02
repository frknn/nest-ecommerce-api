import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { VariantsModule } from 'src/variants/variants.module';
import { ProductVariantsController } from './variants.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), VariantsModule],
  controllers: [ProductsController,ProductVariantsController],
  providers: [ProductsService]
})
export class ProductsModule {}
