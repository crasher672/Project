import SkinCard from './skinCard';
import { Skin } from '../../../server/src/types';

type Props = {
  skins: Skin[];
};

export default function SkinGrid({ skins }: Props) {
  if (!skins.length) {
    return (
      <div className="text-gray-400 text-center mt-10">
        No skins found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skins.map((skin) => (
        <SkinCard key={skin.id} skin={skin} />
      ))}
    </div>
  );
}