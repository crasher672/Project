import rawData from './skins.data.json';

export type Skin = {
  id: number;
  name: string;
  weapon: string;
  rarity: string;
  type: string;
  image: string;
  wear?: string;
  marketHashName?: string;
};

const dataObject = rawData as Record<string, any>;

export const skins: Skin[] = Object.entries(dataObject).map(
  ([fullName, value], index) => {
    return {
      id: index + 1,
      name: value.name ?? fullName,
      weapon: value.weapon ?? '',
      rarity: value.rarity ?? 'Unknown',
      type: value.type ?? 'Unknown',
      image: value.image ?? '',
      wear: value.exterior ?? value.wear ?? '',
      marketHashName: fullName,
    };
  }
);