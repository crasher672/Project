'use client';

import SkinCard from './components/skinCard';
import Filters from './components/filters';
import { Skin } from '../../server/src/types';

import { useEffect, useState } from 'react';

export default function Home() {
  const [skins, setSkins] = useState<Skin[]>([]);
  const [weaponFilter, setWeaponFilter] = useState('All');
  const [rarityFilter, setRarityFilter] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/skins')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setSkins(data);
      });
  }, []);

  const filteredSkins = skins.filter((skin) => {
    const weaponMatch =
      weaponFilter === 'All' || skin.weapon === weaponFilter;

    const rarityMatch =
      rarityFilter === 'All' || skin.rarity === rarityFilter;

    const searchMatch =
      skin.name.toLowerCase().includes(search.toLowerCase()) ||
      skin.weapon.toLowerCase().includes(search.toLowerCase());

    return weaponMatch && rarityMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        🎮 CS2 Skins Market
      </h1>

      <Filters
        weaponFilter={weaponFilter}
        setWeaponFilter={setWeaponFilter}
        rarityFilter={rarityFilter}
        setRarityFilter={setRarityFilter}
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkins.map((skin) => (
          <SkinCard key={skin.id} skin={skin} />
        ))}
      </div>
    </div>
  );
}