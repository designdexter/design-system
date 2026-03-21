export type Level = 'beginner' | 'intermediate' | 'advanced';
export type LevelStatus = 'done' | 'active' | 'locked';

export type Question = {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  difficulty: Level;
  category: string;
  explanation: string;
};
