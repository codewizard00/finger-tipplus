import { Inject, Injectable } from '@nestjs/common';
import { CreateBeatOrderDto } from './dto/create-beat-order.dto';
import { UpdateBeatOrderDto } from './dto/update-beat-order.dto';
import { BeatPlan } from './entities/beat-order.entity';

@Injectable()
export class BeatOrderService {

  constructor(
    @Inject('beat_plan_repository')
    private beatPlanRepository: typeof BeatPlan,
  ) { }
  async create(createBeatOrderDto: CreateBeatOrderDto) {
    console.log({ ...createBeatOrderDto })
    const data = await this.beatPlanRepository.create({ ...createBeatOrderDto });
    return "Successfully Created"
  }

  async findAll() {
    const data = await this.beatPlanRepository.findAll();
    return data;
  }

  async findOne(id: number) {
    const data = await this.beatPlanRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, updateBeatOrderDto: UpdateBeatOrderDto) {
    const data = await this.beatPlanRepository.update({ id }, { where: { ...updateBeatOrderDto } })
    return 'Successfully Updated'
  }

  async remove(id: number) {
    const data = await this.beatPlanRepository.destroy({ where: { id } });
    return "Succefully Deleted"
  }
}
