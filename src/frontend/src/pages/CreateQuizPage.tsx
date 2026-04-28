import { ArrowLeft, CheckCircle, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNav } from "../App";
import { Layout } from "../components/Layout";
import { useQuizStore } from "../store/quizStore";
import type { Quiz, QuizQuestion } from "../types/quiz";

const OPTION_LABELS = ["A", "B", "C", "D"];

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

function makeQuestion(): QuizQuestion {
  return {
    id: makeId(),
    text: "",
    options: [
      { id: "a", text: "" },
      { id: "b", text: "" },
      { id: "c", text: "" },
      { id: "d", text: "" },
    ],
    correctOptionId: "a",
  };
}

export default function CreateQuizPage() {
  const nav = useNav();
  const { addQuiz } = useQuizStore();
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<QuizQuestion[]>([makeQuestion()]);
  const [saved, setSaved] = useState(false);

  const updateQuestion = (idx: number, patch: Partial<QuizQuestion>) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === idx ? { ...q, ...patch } : q)),
    );
  };

  const updateOption = (qIdx: number, optId: string, text: string) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIdx
          ? {
              ...q,
              options: q.options.map((o) =>
                o.id === optId ? { ...o, text } : o,
              ),
            }
          : q,
      ),
    );
  };

  const removeQuestion = (idx: number) => {
    if (questions.length <= 1) return;
    setQuestions((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    if (!title.trim()) return;
    const quiz: Quiz = {
      id: makeId(),
      title: title.trim(),
      topic: title.trim(),
      createdBy: "teacher",
      createdAt: Date.now(),
      questions: questions.filter((q) => q.text.trim()),
    };
    addQuiz(quiz);
    setSaved(true);
    setTimeout(() => nav.navigate({ page: "teacher-dashboard" }), 1000);
  };

  const isValid = title.trim() && questions.some((q) => q.text.trim());

  return (
    <Layout
      title="Create Quiz"
      backButton={
        <button
          type="button"
          data-ocid="create_quiz.back_button"
          onClick={() => nav.navigate({ page: "teacher-dashboard" })}
          className="p-1.5 rounded-lg hover:bg-secondary transition-smooth text-muted-foreground"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      }
    >
      <div className="space-y-6">
        {/* Quiz Title */}
        <div className="space-y-2">
          <label
            htmlFor="quiz-title"
            className="text-label text-muted-foreground block"
          >
            Quiz Title
          </label>
          <input
            id="quiz-title"
            type="text"
            data-ocid="create_quiz.title_input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Python Fundamentals"
            className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth font-body"
          />
        </div>

        {/* Questions */}
        <div className="space-y-4">
          <p className="text-subheadline text-foreground">Questions</p>

          {questions.map((q, qIdx) => (
            <div
              key={q.id}
              data-ocid={`create_quiz.question_item.${qIdx + 1}`}
              className="bg-card rounded-2xl border border-border p-4 space-y-3 shadow-subtle"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-label text-primary mt-0.5">
                  Q{qIdx + 1}
                </span>
                {questions.length > 1 && (
                  <button
                    type="button"
                    data-ocid={`create_quiz.delete_question_button.${qIdx + 1}`}
                    onClick={() => removeQuestion(qIdx)}
                    className="p-1 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth"
                    aria-label="Remove question"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <textarea
                data-ocid={`create_quiz.question_text.${qIdx + 1}`}
                value={q.text}
                onChange={(e) => updateQuestion(qIdx, { text: e.target.value })}
                placeholder="Type your question here..."
                rows={2}
                className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth text-sm font-body resize-none"
              />

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium">
                  Options (tap to mark correct)
                </p>
                {q.options.map((opt, optIdx) => (
                  <div key={opt.id} className="flex items-center gap-2">
                    <button
                      type="button"
                      data-ocid={`create_quiz.correct_option.${qIdx + 1}.${optIdx + 1}`}
                      onClick={() =>
                        updateQuestion(qIdx, { correctOptionId: opt.id })
                      }
                      className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold transition-smooth ${
                        q.correctOptionId === opt.id
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-muted-foreground hover:bg-accent/20"
                      }`}
                      aria-label={`Mark option ${OPTION_LABELS[optIdx]} as correct`}
                    >
                      {OPTION_LABELS[optIdx]}
                    </button>
                    <input
                      type="text"
                      data-ocid={`create_quiz.option_input.${qIdx + 1}.${optIdx + 1}`}
                      value={opt.text}
                      onChange={(e) =>
                        updateOption(qIdx, opt.id, e.target.value)
                      }
                      placeholder={`Option ${OPTION_LABELS[optIdx]}`}
                      className="flex-1 px-3 py-2 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth text-sm font-body"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            type="button"
            data-ocid="create_quiz.add_question_button"
            onClick={() => setQuestions((prev) => [...prev, makeQuestion()])}
            className="w-full py-3 rounded-2xl border-2 border-dashed border-primary/40 text-primary font-display font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/5 transition-smooth"
          >
            <Plus className="w-4 h-4" />
            Add Question
          </button>
        </div>

        {/* Save Button */}
        <button
          type="button"
          data-ocid="create_quiz.save_button"
          onClick={handleSave}
          disabled={!isValid || saved}
          className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2"
        >
          {saved ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Saved!
            </>
          ) : (
            "Save Quiz"
          )}
        </button>
      </div>
    </Layout>
  );
}
