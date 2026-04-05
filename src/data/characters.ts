import type { Character } from '../types';

export const characters: Character[] = [
  // ─── Harry Potter (17) ─────────────────────────────────
  { id: 'hp-01', name: 'Harry Potter',           category: 'hp', image: '/characters/hp/harry.png',        emoji: '⚡' },
  { id: 'hp-02', name: 'Ginny Weasley',           category: 'hp', image: '/characters/hp/hermione.png',     emoji: '🔥' },
  { id: 'hp-03', name: 'Ron Weasley',            category: 'hp', image: '/characters/hp/ron.png',          emoji: '♟️' },
  { id: 'hp-04', name: 'Dumbledore Gay',         category: 'hp', image: '/characters/hp/dumbledore.png',   emoji: '🏳️‍🌈' },
  { id: 'hp-05', name: 'Hermione Granger',       category: 'hp', image: '/characters/hp/hermione2.png',    emoji: '📚' },
  { id: 'hp-06', name: 'Rubeus Hagrid',          category: 'hp', image: '/characters/hp/hagrid.png',       emoji: '🪄' },
  { id: 'hp-07', name: 'Lee Jordan',             category: 'hp', image: '/characters/hp/draco.png',        emoji: '📢' },
  { id: 'hp-08', name: 'Gilderoy Lockhart',      category: 'hp', image: '/characters/hp/luna.png',         emoji: '✨' },
  { id: 'hp-09', name: 'Neville Longbottom',     category: 'hp', image: '/characters/hp/neville.png',      emoji: '🌿' },
  { id: 'hp-10', name: 'Minerva McGonagall',     category: 'hp', image: '/characters/hp/mcgonagall.png',   emoji: '🐱' },
  { id: 'hp-11', name: 'Hedwig',                 category: 'hp', image: '/characters/hp/hedwig.png',       emoji: '🦉' },
  { id: 'hp-12', name: 'Bellatrix Lestrange',    category: 'hp', image: '/characters/hp/bellatrix.png',    emoji: '💀' },
  { id: 'hp-13', name: 'Sybill Trelawney',       category: 'hp', image: '/characters/hp/sybill.png',       emoji: '🔮' },
  { id: 'hp-14', name: 'Prof. Trelawney',        category: 'hp', image: '/characters/hp/trelawney.png',    emoji: '🧿' },
  { id: 'hp-15', name: 'Ni Cochina Idea',        category: 'hp', image: '/characters/hp/dean-thomas.png',  emoji: '🤷' },
  { id: 'hp-16', name: 'Fred Weasley',           category: 'hp', image: '/characters/hp/fred-weasley.png', emoji: '🎭' },
  { id: 'hp-17', name: 'Luna (Ravenclaw)',       category: 'hp', image: '/characters/hp/luna2.png',        emoji: '💙' },

  // ─── Mario Bros (12) ───────────────────────────────────
  { id: 'mario-01', name: 'Mario',          category: 'mario', image: '/characters/mario/mario.png',         emoji: '🍄' },
  { id: 'mario-02', name: 'Luigi',          category: 'mario', image: '/characters/mario/luigi-classic.png', emoji: '💚' },
  { id: 'mario-03', name: 'Princess Peach', category: 'mario', image: '/characters/mario/peach.png',         emoji: '👑' },
  { id: 'mario-04', name: 'Toad',           category: 'mario', image: '/characters/mario/toad.png',          emoji: '🍄' },
  { id: 'mario-05', name: 'Yoshi',          category: 'mario', image: '/characters/mario/yoshi.png',         emoji: '🦎' },
  { id: 'mario-06', name: 'Bowser',         category: 'mario', image: '/characters/mario/bowser.png',        emoji: '🐢' },
  { id: 'mario-07', name: 'Donkey Kong',    category: 'mario', image: '/characters/mario/donkey-kong.png',   emoji: '🦍' },
  { id: 'mario-08', name: 'Mario Aventurero', category: 'mario', image: '/characters/mario/wario.png',        emoji: '💛' },
  { id: 'mario-09', name: 'Mario Pintoso',  category: 'mario', image: '/characters/mario/fire-mario.png',    emoji: '🔥' },
  { id: 'mario-10', name: 'Fire Luigi',     category: 'mario', image: '/characters/mario/fire-luigi.png',    emoji: '💎' },
  { id: 'mario-11', name: 'Paragoomba',     category: 'mario', image: '/characters/mario/paragoomba.png',    emoji: '🍂' },
  { id: 'mario-12', name: 'Si, Otro Luigi',  category: 'mario', image: '/characters/mario/luigi.png',        emoji: '🌟' },
];

export const hpCharacters = characters.filter(c => c.category === 'hp');
export const marioCharacters = characters.filter(c => c.category === 'mario');
