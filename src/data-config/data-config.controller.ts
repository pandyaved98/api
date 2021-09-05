import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Scopes } from '../auth/decorators/scopes.decorator';
import { ScopesGuard } from '../auth/guards/scopes.guard';
import { ScopesDictionary } from '../auth/interfaces/token-payload.interface';
import { JWTGuard } from '../auth/jwt.strategy';

@Controller('config')
export class DataConfigController {
  @Post('alex')
  @UseGuards(JWTGuard, ScopesGuard)
  @ApiBearerAuth()
  @Scopes(ScopesDictionary.WRITE)
  getAlexConfig() {}
}
