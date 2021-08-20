import { AstraModule } from '@cahllagerfeld/nestjs-astra';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AstraConfigService } from '../astra/astra-config.service';
import { AstraService } from '../astra/astra.service';
import { KeywordService } from './keyword.service';

describe('KeywordService', () => {
  let service: KeywordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AstraModule.forRootAsync({
          useClass: AstraConfigService,
        }),
        ConfigModule.forRoot(),
      ],
      providers: [KeywordService, AstraService],
    }).compile();

    service = module.get<KeywordService>(KeywordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
