import { BookOpen, ChevronRight, Clock, Plus, Sparkles } from "lucide-react";
import { useNav } from "../App";
import { Layout } from "../components/Layout";
import { useAuthStore } from "../store/authStore";
import { useQuizStore } from "../store/quizStore";
import type { Quiz } from "../types/quiz";

function QuizCard({ quiz, index }: { quiz: Quiz; index: number }) {
  return (
    <div
      data-ocid={`teacher.quiz_item.${index + 1}`}
      className="bg-card rounded-2xl border border-border p-4 flex items-center gap-4 shadow-subtle transition-smooth hover:shadow-md hover:border-primary/30"
    >
      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <BookOpen className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-foreground truncate">
          {quiz.title}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              quiz.createdBy === "ai"
                ? "bg-accent/15 text-accent"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {quiz.createdBy === "ai" ? "✦ AI" : "Manual"}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {quiz.questions.length} questions
          </span>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
    </div>
  );
}

export default function TeacherDashboard() {
  const { userName } = useAuthStore();
  const { quizzes } = useQuizStore();
  const nav = useNav();

  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        {/* Greeting */}
        <div className="bg-card-elevated rounded-2xl p-5 border border-border">
          <p className="text-label text-muted-foreground mb-1">Good day,</p>
          <h1 className="text-headline text-foreground">{userName} 👋</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Ready to create something great today?
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            data-ocid="teacher.create_quiz_button"
            onClick={() => nav.navigate({ page: "create-quiz" })}
            className="bg-primary text-primary-foreground rounded-2xl p-4 flex flex-col items-start gap-3 shadow-md transition-smooth hover:opacity-90 active:scale-[0.98]"
          >
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </div>
            <span className="font-display font-semibold text-sm leading-tight">
              Create Quiz
            </span>
          </button>

          <button
            type="button"
            data-ocid="teacher.generate_quiz_button"
            onClick={() => nav.navigate({ page: "generate-quiz" })}
            className="bg-accent text-accent-foreground rounded-2xl p-4 flex flex-col items-start gap-3 shadow-md transition-smooth hover:opacity-90 active:scale-[0.98]"
          >
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-display font-semibold text-sm leading-tight">
              Generate with AI
            </span>
          </button>
        </div>

        {/* Quiz List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-subheadline text-foreground">Your Quizzes</p>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
              {quizzes.length} total
            </span>
          </div>

          {quizzes.length === 0 ? (
            <div
              data-ocid="teacher.quiz_list.empty_state"
              className="bg-card rounded-2xl border border-dashed border-border p-8 text-center"
            >
              <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
              <p className="font-display font-semibold text-foreground text-sm">
                No quizzes yet
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Create your first quiz above
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
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
