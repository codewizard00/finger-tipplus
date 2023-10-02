import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { orderProviders } from './entities/order.provider';
import { productProviders } from 'src/products/entities/product.provider';
import { accountProviders } from 'src/account/entities/account.provider';

@Module({
  controllers: [OrderController],
  providers: [OrderService, ...orderProviders, ...productProviders, ...accountProviders],
})
export class OrderModule { }
