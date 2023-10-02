import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { DatabaseModule } from './database/database.module';
import { OrderModule } from './order/order.module';
import { VisitModule } from './visit/visit.module';
import { BeatOrderModule } from './beat-order/beat-order.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AuthModule, AccountModule, DatabaseModule, OrderModule, VisitModule, BeatOrderModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
