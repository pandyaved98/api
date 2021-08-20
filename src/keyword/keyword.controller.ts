import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Scopes } from '../auth/decorators/scopes.decorator';
import { User } from '../auth/decorators/user.decorator';
import { ScopesGuard } from '../auth/guards/scopes.guard';
import {
  ScopesDictionary,
  TokenPayload,
} from '../auth/interfaces/token-payload.interface';
import { JWTGuard } from '../auth/jwt.strategy';

import { KeywordService } from './keyword.service';

@Controller('keyword')
@ApiTags('Keyword')
export class KeywordController {
  constructor(private readonly keywordService: KeywordService) {}

  @Get()
  @UseGuards(JWTGuard, ScopesGuard)
  @ApiBearerAuth()
  @Scopes(ScopesDictionary.READ)
  getKeywords(@User() user: TokenPayload) {
    return this.keywordService.getKeywords(user.keyspace);
  }

  @Post()
  @UseGuards(JWTGuard, ScopesGuard)
  @ApiBearerAuth()
  @Scopes(ScopesDictionary.WRITE)
  @ApiBody({})
  createKeyword(@Body() body, @User() user: TokenPayload) {
    return this.keywordService.createKeyword(body.keyword, user.keyspace);
  }
}
