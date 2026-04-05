import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface ResetButtonProps {
  onReset: () => void;
  foundCount: number;
}

export function ResetButton({ onReset, foundCount }: ResetButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (foundCount === 0) return null;

  return (
    <section className="px-5 pb-10 text-center">
      <AnimatePresence mode="wait">
        {!showConfirm ? (
          <motion.button
            key="reset-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowConfirm(true)}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-gray-400 transition-colors hover:text-gray-600"
          >
            <RotateCcw className="h-4 w-4" />
            Reiniciar progreso
          </motion.button>
        ) : (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto max-w-xs rounded-2xl border border-red-200 bg-red-50 p-4"
          >
            <AlertTriangle className="mx-auto mb-2 h-6 w-6 text-red-400" />
            <p className="mb-3 text-sm text-red-700">
              Se perderá todo tu progreso. ¿Estás segura?
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  onReset();
                  setShowConfirm(false);
                }}
                className="flex-1 rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-600"
              >
                Sí, reiniciar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
