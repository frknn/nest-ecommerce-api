import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VariantsModule } from './variants/variants.module';
import { OptionsModule } from './options/options.module';
import { CategoriesModule } from './categories/categories.module';
import { AssetsModule } from './assets/assets.module';
import { MerchantsModule } from './merchants/merchants.module';
import config from '../ormconfig'

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ProductsModule,
    CustomersModule,
    VariantsModule,
    OptionsModule,
    CategoriesModule,
    AssetsModule,
    MerchantsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
