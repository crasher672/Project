'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Skin } from '../../../../server/src/types';

export default function SkinDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [skin, setSkin] = useState<Skin | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3001/skins/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSkin(data);
        setLoading(false);
      });
  }, [id]);

  // LOADING UI (clean skeleton-style)
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        <div className="animate-pulse max-w-5xl mx-auto">
          <div className="h-10 w-40 bg-gray-800 rounded mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-80 bg-gray-800 rounded-xl" />
            <div className="space-y-4">
              <div className="h-6 w-3/4 bg-gray-800 rounded" />
              <div className="h-4 w-1/2 bg-gray-800 rounded" />
              <div className="h-4 w-2/3 bg-gray-800 rounded" />
              <div className="h-10 w-32 bg-gray-800 rounded mt-6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!skin) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        <button
          onClick={() => router.push('/')}
          className="text-blue-400 hover:underline mb-6"
        >
          ← Back to Market
        </button>

        <p>Skin not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* BACK BUTTON */}
      <button
        onClick={() => router.push('/')}
        className="text-blue-400 hover:underline mb-6"
      >
        ← Back to Market
      </button>

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* IMAGE SECTION */}
        <div className="bg-[#0f0f0f] p-4 rounded-xl border border-gray-800">
          <img
            src={skin.image}
            alt={skin.name}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* INFO SECTION */}
        <div>
          <h1 className="text-3xl font-bold">{skin.name}</h1>

          <p className="text-gray-400 mt-2">
            {skin.weapon} • {skin.type}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {skin.rarity} • {skin.wear}
          </p>

          <div className="mt-6 text-green-400 text-3xl font-bold">
            ${skin.price}
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg">
            Add to Loadout
          </button>
        </div>
      </div>
    </div>
  );
}