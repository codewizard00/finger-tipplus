import { Module } from '@nestjs/common';
import { BeatOrderService } from './beat-order.service';
import { BeatOrderController } from './beat-order.controller';
import { beatPlanProviders } from './entities/beat-order.provider';

@Module({
  controllers: [BeatOrderController],
  providers: [BeatOrderService, ...beatPlanProviders],
})
export class BeatOrderModule { }
