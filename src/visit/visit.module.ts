import { Module } from '@nestjs/common';
import { VisitService } from './visit.service';
import { VisitController } from './visit.controller';
import { visitProviders } from './entities/visit.provider';

@Module({
  controllers: [VisitController],
  providers: [VisitService, ...visitProviders],
})
export class VisitModule { }
