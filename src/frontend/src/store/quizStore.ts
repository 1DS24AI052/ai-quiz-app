import { create } from "zustand";
import { mockQuizzes } from "../data/mockQuizzes";
import type { Quiz, QuizAttempt } from "../types/quiz";

interface QuizStore {
  quizzes: Quiz[];
  currentAttempt: Partial<QuizAttempt> | null;
  addQuiz: (quiz: Quiz) => void;
  startAttempt: (quizId: string) => void;
  answerQuestion: (questionId: string, optionId: string) => void;
  submitAttempt: (quizId: string) => QuizAttempt;
  clearAttempt: () => void;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  quizzes: mockQuizzes,
  currentAttempt: null,

  addQuiz: (quiz) => set((state) => ({ quizzes: [quiz, ...state.quizzes] })),

  startAttempt: (quizId) => set({ currentAttempt: { quizId, answers: {} } }),

  answerQuestion: (questionId, optionId) =>
    set((state) => ({
      currentAttempt: {
        ...state.currentAttempt,
        answers: {
          ...(state.currentAttempt?.answers ?? {}),
          [questionId]: optionId,
        },
      },
    })),

  submitAttempt: (quizId) => {
    const { quizzes, currentAttempt } = get();
    const quiz = quizzes.find((q) => q.id === quizId);
    if (!quiz) throw new Error("Quiz not found");

    const answers = currentAttempt?.answers ?? {};
    let score = 0;
    for (const q of quiz.questions) {
      if (answers[q.id] === q.correctOptionId) score++;
    }

    const attempt: QuizAttempt = {
      quizId,
      answers,
      score,
      total: quiz.questions.length,
      completedAt: Date.now(),
    };
    set({ currentAttempt: attempt });
    return attempt;
  },

  clearAttempt: () => set({ currentAttempt: null }),
}));
