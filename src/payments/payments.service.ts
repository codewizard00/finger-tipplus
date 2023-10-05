import { Inject, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentsService {

  constructor(
    @Inject('payment_repository')
    private paymentRepository: typeof Payment,
  ) { }
  async create(createPaymentDto: CreatePaymentDto) {
    const data = await this.paymentRepository.create({ ...createPaymentDto })
    return "Succesfully Created."
  }

  async findAll() {
    return await this.paymentRepository.findAll();
  }

  async findOne(id: number) {
    return await this.paymentRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  async remove(id: number) {
    const data = await this.paymentRepository.destroy({ where: { id } });
    return `Successfully Deleted`;
  }
}
