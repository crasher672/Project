export type Rarity =
  | 'Consumer'
  | 'Industrial'
  | 'Mil-Spec'
  | 'Restricted'
  | 'Classified'
  | 'Covert';

export type Skin = {
  id: number;
  name: string;
  weapon: string;
  price: number;
  rarity: Rarity;
  image: string;
};