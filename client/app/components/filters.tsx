'use client';

type Props = {
  weaponFilter: string;
  setWeaponFilter: (value: string) => void;
  rarityFilter: string;
  setRarityFilter: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
};

export default function Filters({
  weaponFilter,
  setWeaponFilter,
  rarityFilter,
  setRarityFilter,
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex gap-4 mb-6 flex-wrap items-center">

      {/* Search */}
      <input
        type="text"
        placeholder="Search skins..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-64 bg-[#111] border border-[#333] p-2 rounded"
      />

      {/* Weapon Filter */}
      <select
        className="bg-[#111] border border-[#333] p-2 rounded"
        value={weaponFilter}
        onChange={(e) => setWeaponFilter(e.target.value)}
      >
        <option value="All">All Weapons</option>
        <option value="AK-47">AK-47</option>
        <option value="AWP">AWP</option>
      </select>

      {/* Rarity Filter */}
      <select
        className="bg-[#111] border border-[#333] p-2 rounded"
        value={rarityFilter}
        onChange={(e) => setRarityFilter(e.target.value)}
      >
        <option value="All">All Rarities</option>
        <option value="Consumer">Consumer</option>
        <option value="Industrial">Industrial</option>
        <option value="Mil-Spec">Mil-Spec</option>
        <option value="Restricted">Restricted</option>
        <option value="Classified">Classified</option>
        <option value="Covert">Covert</option>
      </select>

    </div>
  );
}