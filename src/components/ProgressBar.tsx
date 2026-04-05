import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { getMotivationalMessage } from '../data/messages';

interface ProgressBarProps {
  found: number;
  total: number;
  progress: number;
}

export function ProgressBar({ found, total, progress }: ProgressBarProps) {
  return (
    <section className="px-5 pb-6">
      <div className="mx-auto max-w-md rounded-2xl bg-white/80 p-5 shadow-sm backdrop-blur-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-semibold text-gray-700">Progreso</span>
          </div>
          <span className="text-sm font-bold text-purple-700">
            {found} / {total}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-3 h-3 overflow-hidden rounded-full bg-gray-100">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            {Math.round(progress)}% completado
          </p>
          <motion.p
            key={found}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium text-purple-600"
          >
            {getMotivationalMessage(found, total)}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
