export type Role = "teacher" | "student";

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  correctOptionId: string;
}

export interface Quiz {
  id: string;
  title: string;
  topic: string;
  questions: QuizQuestion[];
  createdAt: number;
  createdBy: "teacher" | "ai";
}

export interface QuizAttempt {
  quizId: string;
  answers: Record<string, string>; // questionId -> optionId
  score: number;
  total: number;
  completedAt: number;
}
