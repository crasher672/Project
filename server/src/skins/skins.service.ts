import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SkinsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.skin.findMany();
  }

  findOne(id: number) {
    return this.prisma.skin.findUnique({
      where: { id },
    });
  }
}