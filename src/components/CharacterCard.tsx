import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  isFound: boolean;
  onToggle: (id: string) => void;
  index: number;
}

export function CharacterCard({ character, isFound, onToggle, index }: CharacterCardProps) {
  const isHp = character.category === 'hp';

  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onToggle(character.id)}
      className={`
        group relative flex flex-col items-center gap-2 rounded-2xl border-2 p-3 transition-all duration-300
        ${isFound
          ? isHp
            ? 'border-hp-secondary/50 bg-gradient-to-b from-amber-50 to-amber-100/50 shadow-md shadow-amber-200/30'
            : 'border-mario-green/50 bg-gradient-to-b from-green-50 to-green-100/50 shadow-md shadow-green-200/30'
          : 'border-gray-200 bg-white/70 shadow-sm hover:border-gray-300 hover:shadow-md active:bg-gray-50'
        }
      `}
      aria-label={`${character.name} - ${isFound ? 'encontrado' : 'no encontrado'}`}
      aria-pressed={isFound}
    >
      {/* Found badge */}
      {isFound && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          className={`absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full shadow-sm ${
            isHp ? 'bg-hp-secondary' : 'bg-mario-green'
          }`}
        >
          <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
        </motion.div>
      )}

      {/* Character avatar */}
      <div
        className={`
          relative flex h-16 w-16 items-center justify-center rounded-xl text-3xl transition-all duration-300
          ${isFound
            ? isHp
              ? 'bg-amber-100'
              : 'bg-green-100'
            : 'bg-gray-100 group-hover:bg-gray-200/70'
          }
          ${isFound ? '' : 'grayscale-[0.3] opacity-70 group-hover:opacity-100 group-hover:grayscale-0'}
        `}
      >
        {character.image && !character.image.includes('undefined') ? (
          <img
            src={character.image}
            alt={character.name}
            className={`h-14 w-14 rounded-lg object-contain transition-all duration-300 ${
              isFound ? '' : 'grayscale-[0.3] opacity-80 group-hover:grayscale-0 group-hover:opacity-100'
            }`}
            onError={(e) => {
              // Fallback to emoji if image fails
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <span className={character.image ? 'hidden' : ''}>
          {character.emoji}
        </span>
      </div>

      {/* Name */}
      <span
        className={`text-center text-xs font-medium leading-tight transition-colors ${
          isFound ? 'text-gray-800' : 'text-gray-500 group-hover:text-gray-700'
        }`}
      >
        {character.name}
      </span>
    </motion.button>
  );
}
