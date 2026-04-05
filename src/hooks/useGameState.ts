import { useState, useCallback, useEffect } from 'react';
import { characters } from '../data/characters';
import type { GameState } from '../types';

const STORAGE_KEY = 'treasure-hunt-progress';

function loadState(): GameState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // Corrupted state, start fresh
  }
  return { found: {} };
}

function saveState(state: GameState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useGameState() {
  const [state, setState] = useState<GameState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const toggleCharacter = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      found: {
        ...prev.found,
        [id]: !prev.found[id],
      },
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setState({ found: {} });
  }, []);

  const totalFound = characters.filter(c => state.found[c.id]).length;
  const totalCharacters = characters.length;
  const progress = totalCharacters > 0 ? (totalFound / totalCharacters) * 100 : 0;
  const isComplete = totalFound === totalCharacters;

  const hpFound = characters.filter(c => c.category === 'hp' && state.found[c.id]).length;
  const hpTotal = characters.filter(c => c.category === 'hp').length;
  const hpComplete = hpFound === hpTotal;

  const marioFound = characters.filter(c => c.category === 'mario' && state.found[c.id]).length;
  const marioTotal = characters.filter(c => c.category === 'mario').length;
  const marioComplete = marioFound === marioTotal;

  return {
    found: state.found,
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
  };
}
