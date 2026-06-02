'use client';

import { useEffect, useMemo, useState } from 'react';

import SkinGrid from './components/skinGrid';
import Sidebar from './components/sidebar';
import FiltersBar from './components/filters';
import { Skin } from '../../server/src/types';

type Meta = {
  types: string[];
  weapons: string[];
};

export default function Home() {
  const [skins, setSkins] = useState<Skin[]>([]);
  const [meta, setMeta] = useState<Meta>({ types: [], weapons: [] });

  const [selectedType, setSelectedType] = useState('All');
  const [selectedWeapon, setSelectedWeapon] = useState('All');
  const [rarityFilter, setRarityFilter] = useState('All');
  const [search, setSearch] = useState('');

  const [page, setPage] = useState(1);

  // FETCH PAGINATED SKINS
  useEffect(() => {
    const load = async () => {
      const params = new URLSearchParams({
        page: String(page),
        limit: '24',
        type: selectedType,
        weapon: selectedWeapon,
        rarity: rarityFilter,
        search,
      });

      const res = await fetch(`http://localhost:3001/skins?${params}`);
      const json = await res.json();

      setSkins(json.data); // IMPORTANT: backend shape
    };

    load();
  }, [page, selectedType, selectedWeapon, rarityFilter, search]);

  // FETCH META ONCE
  useEffect(() => {
    const loadMeta = async () => {
      const res = await fetch(`http://localhost:3001/skins/meta`);
      const json = await res.json();
      setMeta(json);
    };

    loadMeta();
  }, []);

  // FRONTEND FILTER (optional safety layer)
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

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="mb-6">
        <h1 className="text-4xl font-bold">🎮 CS2 Skins Market</h1>
      </div>

      <div className="flex gap-6">
        <Sidebar
          types={meta.types}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          availableWeapons={meta.weapons}
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
            Showing {filteredSkins.length}
          </div>

          <SkinGrid skins={filteredSkins} />

          <div className="flex gap-3 mt-6">
            <button onClick={() => setPage(p => Math.max(p - 1, 1))}>
              Prev
            </button>

            <span>Page {page}</span>

            <button onClick={() => setPage(p => p + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}