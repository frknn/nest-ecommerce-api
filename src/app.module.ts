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
import { AuthenticationModule } from './authentication/authentication.module';
import config from '../ormconfig'
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required()
      })
    }),
    TypeOrmModule.forRoot(config),
    ProductsModule,
    CustomersModule,
    VariantsModule,
    OptionsModule,
    CategoriesModule,
    AssetsModule,
    MerchantsModule,
    AuthenticationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
