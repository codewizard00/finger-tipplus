import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { invoiceProviders } from './entities/invoice.providers';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService,...invoiceProviders],
})
export class InvoicesModule {}
