import { AstraModule } from '@cahllagerfeld/nestjs-astra';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AstraConfigService } from '../astra/astra-config.service';
// import { AstraService } from '../astra/astra.service';
import { KeywordController } from './keyword.controller';

describe('KeywordController', () => {
  let controller: KeywordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AstraModule.forRootAsync({
          useClass: AstraConfigService,
        }),
        ConfigModule.forRoot(),
      ],
      controllers: [KeywordController],
    }).compile();

    controller = module.get<KeywordController>(KeywordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
