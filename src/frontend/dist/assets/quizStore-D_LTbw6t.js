import { c as create } from "./index-CvRvPOZM.js";
const mockQuizzes = [
  {
    id: "quiz-1",
    title: "Python Fundamentals",
    topic: "Python",
    createdBy: "teacher",
    createdAt: Date.now() - 864e5 * 2,
    questions: [
      {
        id: "q1",
        text: "Which keyword is used to define a function in Python?",
        options: [
          { id: "a", text: "function" },
          { id: "b", text: "def" },
          { id: "c", text: "fn" },
          { id: "d", text: "define" }
        ],
        correctOptionId: "b"
      },
      {
        id: "q2",
        text: "What data type is the result of: 3 / 2 in Python 3?",
        options: [
          { id: "a", text: "int" },
          { id: "b", text: "str" },
          { id: "c", text: "float" },
          { id: "d", text: "double" }
        ],
        correctOptionId: "c"
      },
      {
        id: "q3",
        text: "Which of the following is a mutable data type in Python?",
        options: [
          { id: "a", text: "tuple" },
          { id: "b", text: "string" },
          { id: "c", text: "list" },
          { id: "d", text: "int" }
        ],
        correctOptionId: "c"
      },
      {
        id: "q4",
        text: "What does the len() function return?",
        options: [
          { id: "a", text: "Last index" },
          { id: "b", text: "Number of elements" },
          { id: "c", text: "First element" },
          { id: "d", text: "Data type" }
        ],
        correctOptionId: "b"
      }
    ]
  },
  {
    id: "quiz-2",
    title: "JavaScript Basics",
    topic: "JavaScript",
    createdBy: "ai",
    createdAt: Date.now() - 864e5,
    questions: [
      {
        id: "q1",
        text: "Which method removes the last element from an array?",
        options: [
          { id: "a", text: "shift()" },
          { id: "b", text: "pop()" },
          { id: "c", text: "splice()" },
          { id: "d", text: "remove()" }
        ],
        correctOptionId: "b"
      },
      {
        id: "q2",
        text: "What does === check in JavaScript?",
        options: [
          { id: "a", text: "Value only" },
          { id: "b", text: "Type only" },
          { id: "c", text: "Value and type" },
          { id: "d", text: "Reference equality" }
        ],
        correctOptionId: "c"
      },
      {
        id: "q3",
        text: "Which keyword declares a block-scoped variable?",
        options: [
          { id: "a", text: "var" },
          { id: "b", text: "let" },
          { id: "c", text: "global" },
          { id: "d", text: "set" }
        ],
        correctOptionId: "b"
      }
    ]
  }
];
const generateAiQuestions = (topic) => {
  const templates = {
    default: [
      {
        id: "ai-q1",
        text: `What is the primary purpose of ${topic}?`,
        options: [
          { id: "a", text: "Data storage only" },
          { id: "b", text: "Network communication" },
          { id: "c", text: "General-purpose programming" },
          { id: "d", text: "Graphic rendering" }
        ],
        correctOptionId: "c"
      },
      {
        id: "ai-q2",
        text: `Which paradigm does ${topic} primarily support?`,
        options: [
          { id: "a", text: "Functional only" },
          { id: "b", text: "Object-oriented" },
          { id: "c", text: "Logic programming" },
          { id: "d", text: "Assembly-level" }
        ],
        correctOptionId: "b"
      },
      {
        id: "ai-q3",
        text: `What year was ${topic} first introduced?`,
        options: [
          { id: "a", text: "1985" },
          { id: "b", text: "1991" },
          { id: "c", text: "2001" },
          { id: "d", text: "2010" }
        ],
        correctOptionId: "b"
      },
      {
        id: "ai-q4",
        text: `Which company or individual created ${topic}?`,
        options: [
          { id: "a", text: "Microsoft" },
          { id: "b", text: "Google" },
          { id: "c", text: "An independent developer" },
          { id: "d", text: "IBM" }
        ],
        correctOptionId: "c"
      },
      {
        id: "ai-q5",
        text: `What file extension is commonly associated with ${topic}?`,
        options: [
          { id: "a", text: ".txt" },
          { id: "b", text: ".exe" },
          { id: "c", text: ".src" },
          { id: "d", text: `.${topic.toLowerCase().slice(0, 3)}` }
        ],
        correctOptionId: "d"
      }
    ]
  };
  const topicLower = topic.toLowerCase();
  if (topicLower.includes("java") && !topicLower.includes("script")) {
    return [
      {
        id: "ai-q1",
        text: "What is the correct way to declare a constant in Java?",
        options: [
          { id: "a", text: "const int X = 5;" },
          { id: "b", text: "final int X = 5;" },
          { id: "c", text: "static int X = 5;" },
          { id: "d", text: "fixed int X = 5;" }
        ],
        correctOptionId: "b"
      },
      {
        id: "ai-q2",
        text: "Which of the following is NOT a Java primitive type?",
        options: [
          { id: "a", text: "int" },
          { id: "b", text: "boolean" },
          { id: "c", text: "String" },
          { id: "d", text: "char" }
        ],
        correctOptionId: "c"
      },
      {
        id: "ai-q3",
        text: "What does JVM stand for?",
        options: [
          { id: "a", text: "Java Variable Machine" },
          { id: "b", text: "Java Virtual Machine" },
          { id: "c", text: "Java Version Manager" },
          { id: "d", text: "Java Verification Module" }
        ],
        correctOptionId: "b"
      },
      {
        id: "ai-q4",
        text: "Which keyword is used for inheritance in Java?",
        options: [
          { id: "a", text: "inherits" },
          { id: "b", text: "super" },
          { id: "c", text: "extends" },
          { id: "d", text: "implements" }
        ],
        correctOptionId: "c"
      },
      {
        id: "ai-q5",
        text: "What is the entry point method signature in Java?",
        options: [
          { id: "a", text: "public void main(String args)" },
          { id: "b", text: "public static void main(String[] args)" },
          { id: "c", text: "static main()" },
          { id: "d", text: "void start(String[] args)" }
        ],
        correctOptionId: "b"
      }
    ];
  }
  return templates.default;
};
const useQuizStore = create((set, get) => ({
  quizzes: mockQuizzes,
  currentAttempt: null,
  addQuiz: (quiz) => set((state) => ({ quizzes: [quiz, ...state.quizzes] })),
  startAttempt: (quizId) => set({ currentAttempt: { quizId, answers: {} } }),
  answerQuestion: (questionId, optionId) => set((state) => {
    var _a;
    return {
      currentAttempt: {
        ...state.currentAttempt,
        answers: {
          ...((_a = state.currentAttempt) == null ? void 0 : _a.answers) ?? {},
          [questionId]: optionId
        }
      }
    };
  }),
  submitAttempt: (quizId) => {
    const { quizzes, currentAttempt } = get();
    const quiz = quizzes.find((q) => q.id === quizId);
    if (!quiz) throw new Error("Quiz not found");
    const answers = (currentAttempt == null ? void 0 : currentAttempt.answers) ?? {};
    let score = 0;
    for (const q of quiz.questions) {
      if (answers[q.id] === q.correctOptionId) score++;
    }
    const attempt = {
      quizId,
      answers,
      score,
      total: quiz.questions.length,
      completedAt: Date.now()
    };
    set({ currentAttempt: attempt });
    return attempt;
  },
  clearAttempt: () => set({ currentAttempt: null })
}));
export {
  generateAiQuestions as g,
  useQuizStore as u
};
