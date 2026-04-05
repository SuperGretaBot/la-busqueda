export type Category = 'hp' | 'mario';

export interface Character {
  id: string;
  name: string;
  category: Category;
  image: string;
  emoji: string;
}

export interface GameState {
  found: Record<string, boolean>;
}
