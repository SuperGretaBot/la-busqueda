import { motion } from 'framer-motion';
import { Search, Sparkles, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-12 pb-8 text-center">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25"
        >
          <Search className="h-8 w-8 text-white" />
        </motion.div>

        <h1 className="mb-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          La Gran Búsqueda de la Olda
        </h1>

        <p className="mx-auto mb-6 max-w-md text-base leading-relaxed text-gray-600">
          Hay <strong className="text-purple-700">29 personajes</strong> escondidos por todo
          el apartamento, esperando ser descubiertos por ti.
        </p>

        <div className="mx-auto flex max-w-sm flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3 text-left shadow-sm backdrop-blur-sm"
          >
            <MapPin className="h-5 w-5 shrink-0 text-pink-500" />
            <p className="text-sm text-gray-600">
              Explora cada rincón y encuentra a los personajes de{' '}
              <span className="font-semibold text-hp-primary">Harry Potter</span> y{' '}
              <span className="font-semibold text-mario-primary">Mario Bros</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3 text-left shadow-sm backdrop-blur-sm"
          >
            <Search className="h-5 w-5 shrink-0 text-purple-500" />
            <p className="text-sm text-gray-600">
              Cada vez que encuentres uno, márcalo aquí para llevar tu progreso
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3 text-left shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 shrink-0 text-amber-500" />
            <p className="text-sm text-gray-600">
              Cuando los encuentres a <strong>todos</strong>, te espera una{' '}
              <span className="font-semibold text-amber-600">sorpresa muy especial</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
