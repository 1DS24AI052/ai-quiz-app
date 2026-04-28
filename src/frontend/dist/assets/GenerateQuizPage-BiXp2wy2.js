import { a as useNav, r as reactExports, j as jsxRuntimeExports } from "./index-CvRvPOZM.js";
import { L as Layout } from "./Layout-BD15tm6S.js";
import { u as useQuizStore, g as generateAiQuestions } from "./quizStore-D_LTbw6t.js";
import { S as Sparkles } from "./sparkles-CixeY9rq.js";
import { C as CircleCheckBig } from "./circle-check-big-ZoL-LoZ6.js";
import { A as ArrowLeft } from "./arrow-left-BzHFHNRS.js";
function makeId() {
  return Math.random().toString(36).slice(2, 9);
}
function GenerateQuizPage() {
  const nav = useNav();
  const { addQuiz } = useQuizStore();
  const [topic, setTopic] = reactExports.useState("");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [generated, setGenerated] = reactExports.useState(null);
  const [saved, setSaved] = reactExports.useState(false);
  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setGenerated(null);
    setSaved(false);
    setTimeout(() => {
      const questions = generateAiQuestions(topic.trim());
      const quiz = {
        id: makeId(),
        title: `${topic.trim()} Quiz`,
        topic: topic.trim(),
        createdBy: "ai",
        createdAt: Date.now(),
        questions
      };
      setGenerated(quiz);
      setIsGenerating(false);
    }, 1400);
  };
  const handleSave = () => {
    if (!generated) return;
    addQuiz(generated);
    setSaved(true);
    setTimeout(() => nav.navigate({ page: "teacher-dashboard" }), 1e3);
  };
  const OPTION_LABELS = ["A", "B", "C", "D"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Layout,
    {
      title: "AI Quiz Generator",
      backButton: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "generate_quiz.back_button",
          onClick: () => nav.navigate({ page: "teacher-dashboard" }),
          className: "p-1.5 rounded-lg hover:bg-secondary transition-smooth text-muted-foreground",
          "aria-label": "Back",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5" })
        }
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/10 rounded-2xl border border-accent/20 p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: "AI-Powered Generation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Enter a topic and get instant quiz questions" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "quiz-topic",
              className: "text-label text-muted-foreground block",
              children: "Topic"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "quiz-topic",
                type: "text",
                "data-ocid": "generate_quiz.topic_input",
                value: topic,
                onChange: (e) => setTopic(e.target.value),
                onKeyDown: (e) => e.key === "Enter" && handleGenerate(),
                placeholder: "e.g., Python, Java, HTML",
                className: "flex-1 px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth font-body"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "generate_quiz.generate_button",
                onClick: handleGenerate,
                disabled: !topic.trim() || isGenerating,
                className: "px-5 py-3 rounded-xl bg-accent text-accent-foreground font-display font-semibold text-sm transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-md flex items-center gap-2 flex-shrink-0",
                children: [
                  isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                  "Generate"
                ]
              }
            )
          ] })
        ] }),
        isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "generate_quiz.loading_state", className: "space-y-3", children: ["skeleton-1", "skeleton-2", "skeleton-3"].map(
          (skKey) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-2xl border border-border p-4 space-y-3 animate-pulse",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded-lg w-3/4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["opt-a", "opt-b", "opt-c", "opt-d"].map(
                  (optKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-3 bg-muted rounded-lg w-full"
                    },
                    optKey
                  )
                ) })
              ]
            },
            skKey
          )
        ) }),
        generated && !isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subheadline text-foreground", children: "Generated Questions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs bg-accent/15 text-accent font-medium px-2 py-1 rounded-full", children: [
              generated.questions.length,
              " questions"
            ] })
          ] }),
          generated.questions.map((q, qIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `generate_quiz.question_item.${qIdx + 1}`,
              className: "bg-card rounded-2xl border border-border p-4 space-y-3 shadow-subtle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-label text-accent mt-0.5 flex-shrink-0", children: [
                    "Q",
                    qIdx + 1
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium leading-snug", children: q.text })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: q.options.map((opt, optIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm ${opt.id === q.correctOptionId ? "bg-accent/10 border border-accent/30 text-accent font-medium" : "bg-secondary/50 text-muted-foreground"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 ${opt.id === q.correctOptionId ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`,
                          children: OPTION_LABELS[optIdx]
                        }
                      ),
                      opt.text,
                      opt.id === q.correctOptionId && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5 ml-auto flex-shrink-0" })
                    ]
                  },
                  opt.id
                )) })
              ]
            },
            q.id
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "generate_quiz.save_button",
              onClick: handleSave,
              disabled: saved,
              className: "w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 shadow-md flex items-center justify-center gap-2",
              children: saved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
                "Saved to Quizzes!"
              ] }) : "Save Quiz"
            }
          )
        ] })
      ] })
    }
  );
}
export {
  GenerateQuizPage as default
};
