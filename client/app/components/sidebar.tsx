'use client';

import { ui } from '../styles/ui';

type Props = {
  types: string[];
  selectedType: string;
  setSelectedType: (v: string) => void;

  availableWeapons: string[];
  selectedWeapon: string;
  setSelectedWeapon: (v: string) => void;
};

export default function Sidebar({
  types,
  selectedType,
  setSelectedType,
  availableWeapons,
  selectedWeapon,
  setSelectedWeapon,
}: Props) {
  return (
    <div className={ui.sidebarBox}>

      {/* TYPES */}
      <h2 className={ui.sidebarTitle}>TYPE</h2>
      <div className="flex flex-col gap-1 mb-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => {
              setSelectedType(type);
              setSelectedWeapon('All');
            }}
            className={`${ui.sidebarButton} ${
              selectedType === type ? ui.active : ui.inactive
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* WEAPONS */}
      <h2 className={ui.sidebarTitle}>WEAPONS</h2>
      <div className="flex flex-col gap-1">
        <button
          onClick={() => setSelectedWeapon('All')}
          className={`${ui.sidebarButton} ${
            selectedWeapon === 'All' ? ui.active : ui.inactive
          }`}
        >
          All
        </button>

        {availableWeapons.map((weapon) => (
          <button
            key={weapon}
            onClick={() => setSelectedWeapon(weapon)}
            className={`${ui.sidebarButton} ${
              selectedWeapon === weapon ? ui.active : ui.inactive
            }`}
          >
            {weapon}
          </button>
        ))}
      </div>
    </div>
  );
}