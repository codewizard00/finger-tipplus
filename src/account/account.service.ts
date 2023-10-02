import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/account.dto';
import { Account } from './entities/account.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class AccountService {

  constructor(
    @Inject('account_repository')
    private accountRepository: typeof Account,
  ) { }
  async create(createAccountDto: CreateAccountDto) {
    const create_account = await this.accountRepository.create({ ...createAccountDto, account_url: uuidv4() });
  }

  async findAll() {
    const get_all_account = await this.accountRepository.findAll();
    return get_all_account;
  }

  async findOne(id: string) {
    const get_account = await this.accountRepository.findOne({ where: { account_url: id } });
    return get_account;
  }

  async update(id: string, updateAccountDto: any) {
    const update_account = await this.accountRepository.update({ ...updateAccountDto }, { where: { account_url: id } })
    return "Succesfully Updated"
  }

  async remove(id: number) {
    const delete_account = await this.accountRepository.destroy({ where: { id } })
  }
}
