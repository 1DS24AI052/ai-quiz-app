import { ArrowLeft, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNav } from "../App";
import { Layout } from "../components/Layout";
import { generateAiQuestions } from "../data/mockQuizzes";
import { useQuizStore } from "../store/quizStore";
import type { Quiz } from "../types/quiz";

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function GenerateQuizPage() {
  const nav = useNav();
  const { addQuiz } = useQuizStore();
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState<Quiz | null>(null);
  const [saved, setSaved] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setGenerated(null);
    setSaved(false);

    // Simulate AI generation delay
    setTimeout(() => {
      const questions = generateAiQuestions(topic.trim());
      const quiz: Quiz = {
        id: makeId(),
        title: `${topic.trim()} Quiz`,
        topic: topic.trim(),
        createdBy: "ai",
        createdAt: Date.now(),
        questions,
      };
      setGenerated(quiz);
      setIsGenerating(false);
    }, 1400);
  };

  const handleSave = () => {
    if (!generated) return;
    addQuiz(generated);
    setSaved(true);
    setTimeout(() => nav.navigate({ page: "teacher-dashboard" }), 1000);
  };

  const OPTION_LABELS = ["A", "B", "C", "D"];

  return (
    <Layout
      title="AI Quiz Generator"
      backButton={
        <button
          type="button"
          data-ocid="generate_quiz.back_button"
          onClick={() => nav.navigate({ page: "teacher-dashboard" })}
          className="p-1.5 rounded-lg hover:bg-secondary transition-smooth text-muted-foreground"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      }
    >
      <div className="space-y-6">
        {/* Header Card */}
        <div className="bg-accent/10 rounded-2xl border border-accent/20 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="font-display font-semibold text-foreground text-sm">
              AI-Powered Generation
            </p>
            <p className="text-xs text-muted-foreground">
              Enter a topic and get instant quiz questions
            </p>
          </div>
        </div>

        {/* Topic Input */}
        <div className="space-y-2">
          <label
            htmlFor="quiz-topic"
            className="text-label text-muted-foreground block"
          >
            Topic
          </label>
          <div className="flex gap-2">
            <input
              id="quiz-topic"
              type="text"
              data-ocid="generate_quiz.topic_input"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
              placeholder="e.g., Python, Java, HTML"
              className="flex-1 px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth font-body"
            />
            <button
              type="button"
              data-ocid="generate_quiz.generate_button"
              onClick={handleGenerate}
              disabled={!topic.trim() || isGenerating}
              className="px-5 py-3 rounded-xl bg-accent text-accent-foreground font-display font-semibold text-sm transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-md flex items-center gap-2 flex-shrink-0"
            >
              {isGenerating ? (
                <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
              Generate
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isGenerating && (
          <div data-ocid="generate_quiz.loading_state" className="space-y-3">
            {(["skeleton-1", "skeleton-2", "skeleton-3"] as const).map(
              (skKey) => (
                <div
                  key={skKey}
                  className="bg-card rounded-2xl border border-border p-4 space-y-3 animate-pulse"
                >
                  <div className="h-4 bg-muted rounded-lg w-3/4" />
                  <div className="space-y-2">
                    {(["opt-a", "opt-b", "opt-c", "opt-d"] as const).map(
                      (optKey) => (
                        <div
                          key={optKey}
                          className="h-3 bg-muted rounded-lg w-full"
                        />
                      ),
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        )}

        {/* Generated Questions */}
        {generated && !isGenerating && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-subheadline text-foreground">
                Generated Questions
              </p>
              <span className="text-xs bg-accent/15 text-accent font-medium px-2 py-1 rounded-full">
                {generated.questions.length} questions
              </span>
            </div>

            {generated.questions.map((q, qIdx) => (
              <div
                key={q.id}
                data-ocid={`generate_quiz.question_item.${qIdx + 1}`}
                className="bg-card rounded-2xl border border-border p-4 space-y-3 shadow-subtle"
              >
                <div className="flex items-start gap-2">
                  <span className="text-label text-accent mt-0.5 flex-shrink-0">
                    Q{qIdx + 1}
                  </span>
                  <p className="text-sm text-foreground font-medium leading-snug">
                    {q.text}
                  </p>
                </div>
                <div className="space-y-1.5">
                  {q.options.map((opt, optIdx) => (
                    <div
                      key={opt.id}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm ${
                        opt.id === q.correctOptionId
                          ? "bg-accent/10 border border-accent/30 text-accent font-medium"
                          : "bg-secondary/50 text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                          opt.id === q.correctOptionId
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {OPTION_LABELS[optIdx]}
                      </span>
                      {opt.text}
                      {opt.id === q.correctOptionId && (
                        <CheckCircle className="w-3.5 h-3.5 ml-auto flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button
              type="button"
              data-ocid="generate_quiz.save_button"
              onClick={handleSave}
              disabled={saved}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 shadow-md flex items-center justify-center gap-2"
            >
              {saved ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Saved to Quizzes!
                </>
              ) : (
                "Save Quiz"
              )}
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
