import { Inject, Injectable } from '@nestjs/common';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { Visit } from './entities/visit.entity';

@Injectable()
export class VisitService {

  constructor(
    @Inject('visit_repository')
    private visitRepository: typeof Visit,
  ) { }
  async create(createVisitDto: CreateVisitDto) {
    const data = await this.visitRepository.create({ ...createVisitDto });
  }

  async findAll() {
    const data = await this.visitRepository.findAll();
    return data;
  }

  async findOne(id: number) {
    const data = await this.visitRepository.findOne({ where: { id } });
    return data;
  }

  update(id: number, updateVisitDto: UpdateVisitDto) {
    return `This action updates a #${id} visit`;
  }

  async remove(id: number) {
    const data = await this.visitRepository.destroy({ where: { id } });
  }
}
