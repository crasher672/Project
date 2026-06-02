'use client';

import { useEffect, useMemo, useState } from 'react';

import SkinGrid from './components/skinGrid';
import Sidebar from './components/sidebar';
import FiltersBar from './components/filters';
import { Skin } from '../../server/src/types';

export default function Home() {
  const [skins, setSkins] = useState<Skin[]>([]);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedWeapon, setSelectedWeapon] = useState('All');
  const [rarityFilter, setRarityFilter] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/skins')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setSkins(data);
      });
  }, []);

  const filteredSkins = useMemo(() => {
    return skins.filter((skin) => {
      const typeMatch =
        selectedType === 'All' || skin.type === selectedType;

      const weaponMatch =
        selectedWeapon === 'All' || skin.weapon === selectedWeapon;

      const rarityMatch =
        rarityFilter === 'All' || skin.rarity === rarityFilter;

      const searchMatch =
        skin.name.toLowerCase().includes(search.toLowerCase()) ||
        skin.weapon.toLowerCase().includes(search.toLowerCase());

      return typeMatch && weaponMatch && rarityMatch && searchMatch;
    });
  }, [skins, selectedType, selectedWeapon, rarityFilter, search]);

  const types = useMemo(() => {
    return ['All', ...Array.from(new Set(skins.map((s) => s.type)))];
  }, [skins]);

  const weaponMap = useMemo(() => {
    const map: Record<string, string[]> = {};

    skins.forEach((skin) => {
      if (!map[skin.type]) map[skin.type] = [];
      if (!map[skin.type].includes(skin.weapon)) {
        map[skin.type].push(skin.weapon);
      }
    });

    return map;
  }, [skins]);

  const availableWeapons =
    selectedType === 'All'
      ? Array.from(new Set(skins.map((s) => s.weapon)))
      : weaponMap[selectedType] || [];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="mb-6">
        <h1 className="text-4xl font-bold">🎮 CS2 Skins Market</h1>
        <p className="text-gray-400 mt-1">
          Browse Skins, Knives, Gloves & more
        </p>
      </div>

      <div className="flex gap-6">
        <Sidebar
          types={types}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          availableWeapons={availableWeapons}
          selectedWeapon={selectedWeapon}
          setSelectedWeapon={setSelectedWeapon}
        />

        <div className="flex-1">
          <FiltersBar
            search={search}
            setSearch={setSearch}
            rarityFilter={rarityFilter}
            setRarityFilter={setRarityFilter}
          />

          <div className="text-sm text-gray-400 mb-3">
            Showing {filteredSkins.length} skins
          </div>

          {/* CLEAN: grid moved to component */}
          <SkinGrid skins={filteredSkins} />
        </div>
      </div>
    </div>
  );
}