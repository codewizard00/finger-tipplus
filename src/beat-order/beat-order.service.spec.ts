import { Test, TestingModule } from '@nestjs/testing';
import { BeatOrderService } from './beat-order.service';

describe('BeatOrderService', () => {
  let service: BeatOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeatOrderService],
    }).compile();

    service = module.get<BeatOrderService>(BeatOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
