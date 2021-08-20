import { Injectable } from '@nestjs/common';
import { AstraService as AstraApiService } from '../astra/astra.service';
import { CreateKeyword } from './interfaces/create-keyword.interface';

@Injectable()
export class KeywordService {
  constructor(private readonly astraService: AstraApiService) {}

  getKeywords(keyspace: string) {
    return this.astraService.find(keyspace, 'keywords', {});
  }

  createKeyword(keyword: string, keyspace: string) {
    const databaseEntry: CreateKeyword = {
      keyword,
      users: [],
    };
    return this.astraService.create(databaseEntry, keyspace, 'keywords');
  }
}
