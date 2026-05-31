import { Controller, Get, Param } from '@nestjs/common';
import { SkinsService } from './skins.service';

@Controller('skins')
export class SkinsController {
  constructor(private readonly skinsService: SkinsService) {}

  @Get()
  findAll() {
    return this.skinsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skinsService.findOne(Number(id));
  }
}