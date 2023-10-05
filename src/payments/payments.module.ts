import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { paymentProviders } from './entities/payment.providers';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, ...paymentProviders],
})
export class PaymentsModule { }
