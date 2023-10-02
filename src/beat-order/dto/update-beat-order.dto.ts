import { PartialType } from '@nestjs/mapped-types';
import { CreateBeatOrderDto } from './create-beat-order.dto';

export class UpdateBeatOrderDto extends PartialType(CreateBeatOrderDto) {}
