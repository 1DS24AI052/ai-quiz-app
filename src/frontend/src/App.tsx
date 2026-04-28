import { Suspense, lazy } from "react";
import { useAuthStore } from "./store/authStore";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const TeacherDashboard = lazy(() => import("./pages/TeacherDashboard"));
const StudentDashboard = lazy(() => import("./pages/StudentDashboard"));
const CreateQuizPage = lazy(() => import("./pages/CreateQuizPage"));
const GenerateQuizPage = lazy(() => import("./pages/GenerateQuizPage"));
const QuizAttemptPage = lazy(() => import("./pages/QuizAttemptPage"));
const ResultPage = lazy(() => import("./pages/ResultPage"));

export type Page =
  | "login"
  | "teacher-dashboard"
  | "student-dashboard"
  | "create-quiz"
  | "generate-quiz"
  | "quiz-attempt"
  | "result";

// Simple in-memory router via state (no backend routing needed)
import { useState } from "react";

export interface NavState {
  page: Page;
  quizId?: string;
}

export const navContext = {
  navigate: (_state: NavState) => {},
};

import { createContext, useContext } from "react";

interface NavContextType {
  navigate: (state: NavState) => void;
  current: NavState;
}

export const NavigationContext = createContext<NavContextType>({
  navigate: () => {},
  current: { page: "login" },
});

export function useNav() {
  return useContext(NavigationContext);
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  const { isLoggedIn, role } = useAuthStore();
  const [current, setCurrent] = useState<NavState>({
    page: isLoggedIn
      ? role === "teacher"
        ? "teacher-dashboard"
        : "student-dashboard"
      : "login",
  });

  const navigate = (state: NavState) => setCurrent(state);

  const renderPage = () => {
    if (!isLoggedIn) return <LoginPage />;
    switch (current.page) {
      case "teacher-dashboard":
        return <TeacherDashboard />;
      case "student-dashboard":
        return <StudentDashboard />;
      case "create-quiz":
        return <CreateQuizPage />;
      case "generate-quiz":
        return <GenerateQuizPage />;
      case "quiz-attempt":
        return <QuizAttemptPage quizId={current.quizId!} />;
      case "result":
        return <ResultPage quizId={current.quizId!} />;
      default:
        return role === "teacher" ? <TeacherDashboard /> : <StudentDashboard />;
    }
  };

  return (
    <NavigationContext.Provider value={{ navigate, current }}>
      <Suspense fallback={<LoadingFallback />}>{renderPage()}</Suspense>
    </NavigationContext.Provider>
  );
}
