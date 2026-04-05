import { motion } from 'framer-motion';
import { Wand2, Gamepad2, Award } from 'lucide-react';
import { CharacterCard } from './CharacterCard';
import { getCategoryMessage } from '../data/messages';
import type { Character, Category } from '../types';

interface CategorySectionProps {
  category: Category;
  characters: Character[];
  found: Record<string, boolean>;
  onToggle: (id: string) => void;
  foundCount: number;
  totalCount: number;
  isComplete: boolean;
}

const categoryConfig = {
  hp: {
    title: 'Harry Potter',
    icon: Wand2,
    gradient: 'from-hp-primary to-hp-secondary',
    bgGradient: 'from-amber-50/50 to-orange-50/30',
    borderColor: 'border-amber-200/50',
    iconColor: 'text-hp-secondary',
    badgeBg: 'bg-hp-primary',
    progressBg: 'bg-gradient-to-r from-hp-primary to-hp-secondary',
    trackBg: 'bg-amber-100',
  },
  mario: {
    title: 'Mario Bros',
    icon: Gamepad2,
    gradient: 'from-mario-primary to-mario-secondary',
    bgGradient: 'from-red-50/50 to-blue-50/30',
    borderColor: 'border-red-200/50',
    iconColor: 'text-mario-primary',
    badgeBg: 'bg-mario-primary',
    progressBg: 'bg-gradient-to-r from-mario-primary to-mario-secondary',
    trackBg: 'bg-red-100',
  },
};

export function CategorySection({
  category,
  characters,
  found,
  onToggle,
  foundCount,
  totalCount,
  isComplete,
}: CategorySectionProps) {
  const config = categoryConfig[category];
  const Icon = config.icon;
  const progress = totalCount > 0 ? (foundCount / totalCount) * 100 : 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mx-5 mb-6 overflow-hidden rounded-3xl border bg-gradient-to-br ${config.bgGradient} ${config.borderColor} backdrop-blur-sm`}
    >
      {/* Category header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${config.gradient} shadow-sm`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">{config.title}</h2>
            <p className="text-xs text-gray-500">
              {getCategoryMessage(foundCount, totalCount, category)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isComplete && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Award className="h-6 w-6 text-amber-500" />
            </motion.div>
          )}
          <span className={`rounded-full px-3 py-1 text-xs font-bold text-white ${config.badgeBg}`}>
            {foundCount}/{totalCount}
          </span>
        </div>
      </div>

      {/* Category progress bar */}
      <div className="mx-5 mb-4">
        <div className={`h-1.5 overflow-hidden rounded-full ${config.trackBg}`}>
          <motion.div
            className={`h-full rounded-full ${config.progressBg}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Characters grid */}
      <div className="grid grid-cols-3 gap-3 px-4 pb-5 md:grid-cols-4 lg:grid-cols-6">
        {characters.map((character, index) => (
          <CharacterCard
            key={character.id}
            character={character}
            isFound={!!found[character.id]}
            onToggle={onToggle}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}
