import { Controller, Get, Query } from '@nestjs/common';
import { SkinsService } from './skins.service';

@Controller('skins')
export class SkinsController {
  constructor(private readonly skinsService: SkinsService) {}

  @Get()
  findAll(
    @Query('page') page = '1',
    @Query('limit') limit = '24',
    @Query('type') type = 'All',
    @Query('weapon') weapon = 'All',
    @Query('rarity') rarity = 'All',
    @Query('search') search = '',
  ) {
    return this.skinsService.findAll({
      page: Number(page),
      limit: Number(limit),
      type,
      weapon,
      rarity,
      search,
    });
  }
  @Get('meta')
getMeta() {
  return this.skinsService.getMeta();
}

}