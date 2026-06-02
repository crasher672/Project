import { Injectable } from '@nestjs/common';
import { skins } from './data/skins.data';

type FindAllParams = {
  page: number;
  limit: number;
  type: string;
  weapon: string;
  rarity: string;
  search: string;
};

@Injectable()
export class SkinsService {
  findAll(params: FindAllParams) {
    const {
      page,
      limit,
      type,
      weapon,
      rarity,
      search,
    } = params;

    let filtered = skins;

    // FILTER FIRST (IMPORTANT)
    if (type !== 'All') {
      filtered = filtered.filter((s) => s.type === type);
    }

    if (weapon !== 'All') {
      filtered = filtered.filter((s) => s.weapon === weapon);
    }

    if (rarity !== 'All') {
      filtered = filtered.filter((s) => s.rarity === rarity);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.weapon.toLowerCase().includes(q),
      );
    }

    // PAGINATE AFTER FILTER
    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      total: filtered.length,
      page,
      limit,
      data: filtered.slice(start, end),
    };
  }
  getMeta() {
  const types = Array.from(new Set(skins.map(s => s.type)));
  const weapons = Array.from(new Set(skins.map(s => s.weapon)));

  return {
    types: ['All', ...types],
    weapons: [...weapons],
  };
}
}