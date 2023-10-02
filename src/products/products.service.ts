import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @Inject('product_repository')
    private productRepository: typeof Product,
  ) { }
  async create(createProductDto: CreateProductDto) {
    const data = await this.productRepository.create({ ...createProductDto });
  }

  async findAll() {
    const data = await this.productRepository.findAll();
    return data;
  }

  async findOne(id: number) {
    const data = await this.productRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const data = await this.productRepository.update({ ...updateProductDto }, { where: { id } })
    console.log(data)
  }

  async remove(id: number) {
    const data = await this.productRepository.destroy({ where: { id } });
  }
}
