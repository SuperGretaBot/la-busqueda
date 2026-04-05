import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Star, Heart, PartyPopper, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CompletionModal({ isOpen, onClose }: CompletionModalProps) {
  const hasConfettied = useRef(false);

  useEffect(() => {
    if (isOpen && !hasConfettied.current) {
      hasConfettied.current = true;

      // Fire confetti from both sides
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ['#7C3AED', '#EC4899', '#F59E0B', '#10B981'],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ['#7C3AED', '#EC4899', '#F59E0B', '#10B981'],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      // Big initial burst
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#7C3AED', '#EC4899', '#F59E0B', '#10B981', '#D3A625'],
      });

      frame();
    }

    if (!isOpen) {
      hasConfettied.current = false;
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-400 backdrop-blur-sm transition-colors hover:text-gray-600"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Decorative top */}
            <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-amber-500">
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-white/20"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <PartyPopper className="h-20 w-20 text-white drop-shadow-lg" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="px-6 pt-6 pb-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="mb-2 font-display text-2xl font-bold text-gray-900">
                  TATIS ERES UNA TESA
                </h2>

                <div className="mb-4 flex items-center justify-center gap-1">
                  {[Star, Heart, Star].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Icon className={`h-5 w-5 ${i === 1 ? 'text-pink-500' : 'text-amber-400'}`} fill="currentColor" />
                    </motion.div>
                  ))}
                </div>

                <p className="mb-2 text-base font-semibold text-purple-700">
                  Los encontraste todos
                </p>
                <p className="mb-6 text-sm text-gray-500">
                  Gracias por compartir conmigo tantas tontadas, por aguantarme y ser la mejor esposa de esta vida y la otra, gracias por jugar este juego, eres lo mejor de mi vida.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="rounded-2xl border-2 border-dashed border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-5"
              >
                <Gift className="mx-auto mb-3 h-10 w-10 text-amber-500" />
                <p className="mb-1 text-lg font-bold text-amber-800">
                  ¡Hay un premio esperándote!
                </p>
                <p className="text-sm text-amber-700">
                  ¿Qué esperas? Buscame, cansame para que te cuente cuál es el premio!!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
