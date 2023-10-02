import { Test, TestingModule } from '@nestjs/testing';
import { BeatOrderController } from './beat-order.controller';
import { BeatOrderService } from './beat-order.service';

describe('BeatOrderController', () => {
  let controller: BeatOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeatOrderController],
      providers: [BeatOrderService],
    }).compile();

    controller = module.get<BeatOrderController>(BeatOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
