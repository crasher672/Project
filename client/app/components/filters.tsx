'use client';

import { ui } from '../styles/ui';

type Props = {
  search: string;
  setSearch: (v: string) => void;

  rarityFilter: string;
  setRarityFilter: (v: string) => void;
};

export default function FiltersBar({
  search,
  setSearch,
  rarityFilter,
  setRarityFilter,
}: Props) {
  return (
    <div className="flex gap-4 mb-4 flex-wrap">

      <input
        type="text"
        placeholder="Search skins..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={ui.topInput}
      />

      <select
        className={ui.select}
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