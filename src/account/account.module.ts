import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { accountProviders } from './entities/account.provider';

@Module({
  controllers: [AccountController],
  providers: [AccountService, ...accountProviders],
})
export class AccountModule { }
