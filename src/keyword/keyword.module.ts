import { Module } from '@nestjs/common';
import { AstraService as AstraApiService } from '../astra/astra.service';
import { KeywordController } from './keyword.controller';
import { KeywordService } from './keyword.service';

@Module({
  controllers: [KeywordController],
  providers: [KeywordService, AstraApiService],
})
export class KeywordModule {}
