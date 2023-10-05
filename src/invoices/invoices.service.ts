import { Inject, Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {

  constructor(
    @Inject('invoice_repository')
    private invoiceRepository: typeof Invoice,
  ) { }
  async create(createInvoiceDto: CreateInvoiceDto) {
    const data = await this.invoiceRepository.create({ ...createInvoiceDto });
    return 'Successfylly Created'
  }

  async findAll() {
    return await this.invoiceRepository.findAll();
  }

  async findOne(id: number) {
    return await this.invoiceRepository.findOne({ where: { id } });
  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  async remove(id: number) {
    const data = await this.invoiceRepository.destroy({ where: { id } });
    return "Successfully Deleted";
  }
}
