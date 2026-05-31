import { Injectable } from '@nestjs/common';
import { Skin } from '../types';

@Injectable()
export class SkinsService {
  private skins: Skin[] = [
    {
      id: 1,
      name: 'AK-47 | Redline',
      weapon: 'AK-47',
      rarity: 'Classified',
      image: '/images/AK-47_Redline.png',
      price: 12.5,
    },
    {
      id: 2,
      name: 'AWP | Asiimov',
      weapon: 'AWP',
      rarity: 'Covert',
      image: '/images/AWP_Asiimov.png',
      price: 85.0,
    },
  ];

  findAll() {
    return this.skins;
  }

  findOne(id: number) {
    return this.skins.find((skin) => skin.id === id);
  }
}