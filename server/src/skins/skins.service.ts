import { Injectable, NotFoundException } from '@nestjs/common';
import { skins } from './data/skins.data';

@Injectable()
export class SkinsService {
  findAll() {
    return skins;
  }

  findOne(id: number) {
    const skin = skins.find((s) => s.id === id);

    if (!skin) {
      throw new NotFoundException('Skin not found');
    }

    return skin;
  }

  findByWeapon(weapon: string) {
    return skins.filter((s) => s.weapon === weapon);
  }
}