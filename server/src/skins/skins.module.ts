import { Module } from '@nestjs/common';
import { SkinsController } from './skins.controller';
import { SkinsService } from './skins.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SkinsController],
  providers: [SkinsService, PrismaService],
})
export class SkinsModule {}