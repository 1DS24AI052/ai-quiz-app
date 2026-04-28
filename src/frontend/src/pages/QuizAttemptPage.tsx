import { ArrowLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNav } from "../App";
import { Layout } from "../components/Layout";
import { useQuizStore } from "../store/quizStore";

interface QuizAttemptPageProps {
  quizId: string;
}

const OPTION_LABELS = ["A", "B", "C", "D"];

export default function QuizAttemptPage({ quizId }: QuizAttemptPageProps) {
  const nav = useNav();
  const { quizzes, answerQuestion, submitAttempt, currentAttempt } =
    useQuizStore();
  const [currentIdx, setCurrentIdx] = useState(0);

  const quiz = quizzes.find((q) => q.id === quizId);
  if (!quiz) {
    return (
      <Layout title="Quiz">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Quiz not found.</p>
        </div>
      </Layout>
    );
  }

  const question = quiz.questions[currentIdx];
  const totalQuestions = quiz.questions.length;
  const selectedOptionId = currentAttempt?.answers?.[question.id];
  const isLast = currentIdx === totalQuestions - 1;

  const handleNext = () => {
    if (isLast) {
      submitAttempt(quizId);
      nav.navigate({ page: "result", quizId });
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const progress = ((currentIdx + 1) / totalQuestions) * 100;

  return (
    <Layout
      title={quiz.title}
      backButton={
        <button
          type="button"
          data-ocid="quiz_attempt.back_button"
          onClick={() => nav.navigate({ page: "student-dashboard" })}
          className="p-1.5 rounded-lg hover:bg-secondary transition-smooth text-muted-foreground"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      }
    >
      <div className="space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Question {currentIdx + 1} of {totalQuestions}
            </span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div
          data-ocid={`quiz_attempt.question_card.${currentIdx + 1}`}
          className="bg-card-elevated rounded-2xl border border-border p-5 shadow-md"
        >
          <p className="text-label text-primary mb-3">
            Question {currentIdx + 1}
          </p>
          <p className="font-display font-semibold text-foreground text-base leading-snug">
            {question.text}
          </p>
        </div>

        {/* Options */}
        <div
          className="space-y-3"
          role="radiogroup"
          aria-label="Answer options"
        >
          {question.options.map((opt, optIdx) => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                aria-pressed={isSelected}
                data-ocid={`quiz_attempt.option.${currentIdx + 1}.${optIdx + 1}`}
                onClick={() => answerQuestion(question.id, opt.id)}
                className={`w-full px-4 py-3.5 rounded-2xl border-2 text-left flex items-center gap-3 transition-smooth ${
                  isSelected
                    ? "border-primary bg-primary/8 shadow-md"
                    : "border-border bg-card hover:border-primary/40 hover:bg-secondary/50"
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 transition-smooth ${
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {OPTION_LABELS[optIdx]}
                </span>
                <span
                  className={`text-sm font-medium leading-snug ${isSelected ? "text-primary" : "text-foreground"}`}
                >
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          data-ocid={
            isLast ? "quiz_attempt.submit_button" : "quiz_attempt.next_button"
          }
          onClick={handleNext}
          disabled={!selectedOptionId}
          className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base flex items-center justify-center gap-2 transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
        >
          {isLast ? "Submit Quiz" : "Next Question"}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </Layout>
  );
}
