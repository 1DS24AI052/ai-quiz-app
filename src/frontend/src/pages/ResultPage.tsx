import { CheckCircle, Home, RotateCcw, Trophy, XCircle } from "lucide-react";
import { useNav } from "../App";
import { Layout } from "../components/Layout";
import { useQuizStore } from "../store/quizStore";
import type { QuizAttempt } from "../types/quiz";

interface ResultPageProps {
  quizId: string;
}

function ScoreRing({ score, total }: { score: number; total: number }) {
  const pct = total > 0 ? score / total : 0;
  const size = 120;
  const stroke = 8;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="-rotate-90"
        aria-label="Score ring"
        role="img"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-secondary"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={
            pct >= 0.7
              ? "text-accent"
              : pct >= 0.4
                ? "text-primary"
                : "text-destructive"
          }
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-display font-bold text-foreground">
          {score}
        </span>
        <span className="text-xs text-muted-foreground">/ {total}</span>
      </div>
    </div>
  );
}

export default function ResultPage({ quizId }: ResultPageProps) {
  const nav = useNav();
  const { quizzes, currentAttempt, startAttempt, clearAttempt } =
    useQuizStore();

  const quiz = quizzes.find((q) => q.id === quizId);
  const attempt = currentAttempt as QuizAttempt | null;

  if (!quiz || !attempt || attempt.score === undefined) {
    return (
      <Layout title="Result">
        <div className="text-center py-12">
          <p className="text-muted-foreground">No result found.</p>
        </div>
      </Layout>
    );
  }

  const pct = attempt.total > 0 ? attempt.score / attempt.total : 0;
  const feedbackLabel =
    pct >= 0.8
      ? "Excellent!"
      : pct >= 0.6
        ? "Good Job!"
        : pct >= 0.4
          ? "Keep Practicing"
          : "Needs Improvement";
  const feedbackColor =
    pct >= 0.7
      ? "text-accent"
      : pct >= 0.4
        ? "text-primary"
        : "text-destructive";

  const handleRetry = () => {
    clearAttempt();
    startAttempt(quizId);
    nav.navigate({ page: "quiz-attempt", quizId });
  };

  const handleHome = () => {
    clearAttempt();
    nav.navigate({ page: "student-dashboard" });
  };

  return (
    <Layout title="Results">
      <div className="space-y-6">
        {/* Score Card */}
        <div
          data-ocid="result.score_card"
          className="bg-card-elevated rounded-2xl border border-border p-6 flex flex-col items-center gap-4 shadow-md"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Trophy className="w-6 h-6 text-primary" />
          </div>
          <ScoreRing score={attempt.score} total={attempt.total} />
          <div className="text-center">
            <p
              className={`text-subheadline font-display font-bold ${feedbackColor}`}
            >
              {feedbackLabel}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              You answered {attempt.score} out of {attempt.total} questions
              correctly
            </p>
          </div>
          <div className="flex gap-3 w-full">
            <div className="flex-1 bg-accent/10 rounded-xl p-3 text-center border border-accent/20">
              <p className="text-xl font-display font-bold text-accent">
                {attempt.score}
              </p>
              <p className="text-xs text-muted-foreground">Correct</p>
            </div>
            <div className="flex-1 bg-destructive/10 rounded-xl p-3 text-center border border-destructive/20">
              <p className="text-xl font-display font-bold text-destructive">
                {attempt.total - attempt.score}
              </p>
              <p className="text-xs text-muted-foreground">Wrong</p>
            </div>
            <div className="flex-1 bg-secondary rounded-xl p-3 text-center border border-border">
              <p className="text-xl font-display font-bold text-foreground">
                {Math.round(pct * 100)}%
              </p>
              <p className="text-xs text-muted-foreground">Score</p>
            </div>
          </div>
        </div>

        {/* Answer Review */}
        <div className="space-y-3">
          <p className="text-subheadline text-foreground">Answer Review</p>
          {quiz.questions.map((q, idx) => {
            const userAns = attempt.answers?.[q.id];
            const isCorrect = userAns === q.correctOptionId;
            const correctOption = q.options.find(
              (o) => o.id === q.correctOptionId,
            );
            const userOption = q.options.find((o) => o.id === userAns);

            return (
              <div
                key={q.id}
                data-ocid={`result.answer_item.${idx + 1}`}
                className={`bg-card rounded-2xl border p-4 shadow-subtle ${
                  isCorrect ? "border-accent/30" : "border-destructive/30"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {isCorrect ? (
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {q.text}
                    </p>
                    {!isCorrect && (
                      <div className="mt-2 space-y-1">
                        {userOption && (
                          <p className="text-xs text-destructive">
                            Your answer:{" "}
                            <span className="font-medium">
                              {userOption.text}
                            </span>
                          </p>
                        )}
                        <p className="text-xs text-accent">
                          Correct:{" "}
                          <span className="font-medium">
                            {correctOption?.text}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            data-ocid="result.retry_button"
            onClick={handleRetry}
            className="py-3 rounded-xl border-2 border-primary text-primary font-display font-semibold text-sm flex items-center justify-center gap-2 transition-smooth hover:bg-primary/5 active:scale-[0.98]"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
          <button
            type="button"
            data-ocid="result.home_button"
            onClick={handleHome}
            className="py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm flex items-center justify-center gap-2 transition-smooth hover:opacity-90 active:scale-[0.98] shadow-md"
          >
            <Home className="w-4 h-4" />
            Dashboard
          </button>
        </div>
      </div>
    </Layout>
  );
}
