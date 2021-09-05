import { Test, TestingModule } from '@nestjs/testing';
import { DataConfigService } from './data-config.service';

describe('DataConfigService', () => {
  let service: DataConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataConfigService],
    }).compile();

    service = module.get<DataConfigService>(DataConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
