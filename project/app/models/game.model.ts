export interface Module {
  id: string;
  name: string;
  description: string;
  stars: number;
  maxStars: number;
  completed: boolean;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  code: string;
  task: string;
  solution: string;
  completed: boolean;
  mcq: MCQQuestion[];
}

export interface MCQQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}