import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { Account } from 'src/account/entities/account.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('order_repository')
    private orderRepository: typeof Order,

    @Inject('product_repository')
    private productRepository: typeof Product,

    @Inject('account_repository')
    private accountRepository: typeof Account,
  ) { }
  async create(createOrderDto: CreateOrderDto) {
    const data = await this.orderRepository.create({ ...createOrderDto })
  }

  async findAll() {
    return await this.orderRepository.findAll();
  }

  async findOne(id: number) {
    const data = await this.orderRepository.findOne({ where: { id } });
    const product_data = await this.productRepository.findOne({ where: { id: data?.product_id } });
    const account_data = await this.accountRepository.findOne({ where: { id: data?.account_id } });
    const end_data = { ...data?.dataValues, ...product_data?.dataValues, ...account_data?.dataValues }
    return end_data;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const data = await this.orderRepository.update({ ...updateOrderDto }, { where: { id } });
    return "Succefully Updated";
  }

  async remove(id: number) {
    const data = await this.orderRepository.destroy({ where: { id } });
    return "Succefully Deleted"
  }
}
