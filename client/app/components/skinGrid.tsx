'use client';

import SkinCard, { Skin } from './skinCard';

export default function SkinGrid({ skins }: { skins: Skin[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skins.map((skin) => (
        <SkinCard key={skin.id} skin={skin} />
      ))}
    </div>
  );
}