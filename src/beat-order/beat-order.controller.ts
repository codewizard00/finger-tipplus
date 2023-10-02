import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeatOrderService } from './beat-order.service';
import { CreateBeatOrderDto } from './dto/create-beat-order.dto';
import { UpdateBeatOrderDto } from './dto/update-beat-order.dto';

@Controller('beat-order')
export class BeatOrderController {
  constructor(private readonly beatOrderService: BeatOrderService) { }

  @Post()
  async create(@Body() createBeatOrderDto: CreateBeatOrderDto) {
    return this.beatOrderService.create(createBeatOrderDto);
  }

  @Get()
  async findAll() {
    return this.beatOrderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.beatOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeatOrderDto: UpdateBeatOrderDto) {
    return this.beatOrderService.update(+id, updateBeatOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.beatOrderService.remove(+id);
  }
}
