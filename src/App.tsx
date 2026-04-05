import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProgressBar } from './components/ProgressBar';
import { CategorySection } from './components/CategorySection';
import { CompletionModal } from './components/CompletionModal';
import { ResetButton } from './components/ResetButton';
import { useGameState } from './hooks/useGameState';
import { hpCharacters, marioCharacters } from './data/characters';

export default function App() {
  const {
    found,
    toggleCharacter,
    resetProgress,
    totalFound,
    totalCharacters,
    progress,
    isComplete,
    hpFound,
    hpTotal,
    hpComplete,
    marioFound,
    marioTotal,
    marioComplete,
  } = useGameState();

  const [showModal, setShowModal] = useState(false);
  const [prevComplete, setPrevComplete] = useState(isComplete);

  // Show modal when user completes all characters
  useEffect(() => {
    if (isComplete && !prevComplete) {
      const timer = setTimeout(() => setShowModal(true), 600);
      return () => clearTimeout(timer);
    }
    setPrevComplete(isComplete);
  }, [isComplete, prevComplete]);

  return (
    <div className="mx-auto min-h-screen max-w-lg pb-4">
      <Hero />
      <ProgressBar found={totalFound} total={totalCharacters} progress={progress} />

      {/* Completion banner */}
      {isComplete && (
        <div className="mx-5 mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="w-full rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 p-4 text-center shadow-md shadow-amber-100 transition-all hover:shadow-lg"
          >
            <p className="text-lg font-bold text-amber-800">
              🎉 ¡Misión completada!
            </p>
            <p className="text-sm text-amber-600">
              Toca aquí para ver tu sorpresa
            </p>
          </button>
        </div>
      )}

      <CategorySection
        category="hp"
        characters={hpCharacters}
        found={found}
        onToggle={toggleCharacter}
        foundCount={hpFound}
        totalCount={hpTotal}
        isComplete={hpComplete}
      />

      <CategorySection
        category="mario"
        characters={marioCharacters}
        found={found}
        onToggle={toggleCharacter}
        foundCount={marioFound}
        totalCount={marioTotal}
        isComplete={marioComplete}
      />

      <ResetButton onReset={resetProgress} foundCount={totalFound} />

      <CompletionModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
