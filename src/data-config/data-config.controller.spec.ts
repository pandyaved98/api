import { Test, TestingModule } from '@nestjs/testing';
import { DataConfigController } from './data-config.controller';

describe('DataConfigController', () => {
  let controller: DataConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataConfigController],
    }).compile();

    controller = module.get<DataConfigController>(DataConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
