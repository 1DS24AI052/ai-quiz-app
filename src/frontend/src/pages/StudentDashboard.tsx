import { BookOpen, Clock, Play, Sparkles } from "lucide-react";
import { useNav } from "../App";
import { Layout } from "../components/Layout";
import { useAuthStore } from "../store/authStore";
import { useQuizStore } from "../store/quizStore";
import type { Quiz } from "../types/quiz";

function QuizCard({ quiz, index }: { quiz: Quiz; index: number }) {
  const nav = useNav();
  const { startAttempt } = useQuizStore();

  const handleStart = () => {
    startAttempt(quiz.id);
    nav.navigate({ page: "quiz-attempt", quizId: quiz.id });
  };

  return (
    <div
      data-ocid={`student.quiz_item.${index + 1}`}
      className="bg-card rounded-2xl border border-border p-4 shadow-subtle"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground truncate">
            {quiz.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            {quiz.createdBy === "ai" && (
              <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-accent/15 text-accent flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                AI
              </span>
            )}
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {quiz.questions.length} questions
            </span>
          </div>
        </div>
      </div>
      <button
        type="button"
        data-ocid={`student.start_quiz_button.${index + 1}`}
        onClick={handleStart}
        className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm flex items-center justify-center gap-2 transition-smooth hover:opacity-90 active:scale-[0.98] shadow-md"
      >
        <Play className="w-4 h-4" />
        Start Quiz
      </button>
    </div>
  );
}

export default function StudentDashboard() {
  const { userName } = useAuthStore();
  const { quizzes } = useQuizStore();

  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        {/* Greeting */}
        <div className="bg-card-elevated rounded-2xl p-5 border border-border">
          <p className="text-label text-muted-foreground mb-1">Welcome back,</p>
          <h1 className="text-headline text-foreground">{userName} 👋</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {quizzes.length} quiz{quizzes.length !== 1 ? "zes" : ""} available
            to take
          </p>
        </div>

        {/* Quiz List */}
        <div className="space-y-3">
          <p className="text-subheadline text-foreground">Available Quizzes</p>

          {quizzes.length === 0 ? (
            <div
              data-ocid="student.quiz_list.empty_state"
              className="bg-card rounded-2xl border border-dashed border-border p-8 text-center"
            >
              <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
              <p className="font-display font-semibold text-foreground text-sm">
                No quizzes available
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Ask your teacher to create one
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {quizzes.map((quiz, i) => (
                <QuizCard key={quiz.id} quiz={quiz} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
