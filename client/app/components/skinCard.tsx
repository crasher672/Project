'use client';

import { useRouter } from 'next/navigation';

export type Skin = {
  id: number;
  name: string;
  weapon: string;
  rarity: string;
  wear: string;
  type: string;
  image: string;
  price: number;
};

const rarityColors: Record<string, string> = {
  Consumer: 'border-gray-500',
  Industrial: 'border-blue-400',
  'Mil-Spec': 'border-blue-600',
  Restricted: 'border-purple-500',
  Classified: 'border-pink-500',
  Covert: 'border-red-500',
};

export default function SkinCard({ skin }: { skin: Skin }) {
  const router = useRouter();

  const borderColor = rarityColors[skin.rarity] ?? 'border-white';

  return (
    <div
      onClick={() => router.push(`/skins/${skin.id}`)}
      className={`
        cursor-pointer
        bg-[#0f0f0f]
        border ${borderColor}
        rounded-xl
        p-3
        transition-all duration-200
        hover:scale-[1.03]
        hover:shadow-lg
        hover:shadow-black/50
      `}
    >
      <img
        src={skin.image}
        alt={skin.name}
        className="w-full h-32 object-cover rounded-lg mb-3"
      />

      <h3 className="font-semibold text-lg truncate">
        {skin.name}
      </h3>

      <p className="text-gray-400 text-sm">
        {skin.weapon} • {skin.type}
      </p>

      <p className="text-gray-500 text-xs mt-1">
        {skin.rarity} • {skin.wear}
      </p>

      <div className="mt-3 flex justify-between items-center">
        <p className="text-green-400 font-bold">
          ${skin.price}
        </p>

        <span className="text-xs text-gray-500">
          View →
        </span>
      </div>
    </div>
  );
}