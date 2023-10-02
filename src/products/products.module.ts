import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productProviders } from './entities/product.provider';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ...productProviders],
})
export class ProductsModule { }
