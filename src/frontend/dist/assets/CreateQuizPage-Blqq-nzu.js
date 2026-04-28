import { a as useNav, r as reactExports, j as jsxRuntimeExports } from "./index-CvRvPOZM.js";
import { c as createLucideIcon, L as Layout } from "./Layout-BD15tm6S.js";
import { u as useQuizStore } from "./quizStore-D_LTbw6t.js";
import { P as Plus } from "./plus-BGeam5Tr.js";
import { C as CircleCheckBig } from "./circle-check-big-ZoL-LoZ6.js";
import { A as ArrowLeft } from "./arrow-left-BzHFHNRS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const OPTION_LABELS = ["A", "B", "C", "D"];
function makeId() {
  return Math.random().toString(36).slice(2, 9);
}
function makeQuestion() {
  return {
    id: makeId(),
    text: "",
    options: [
      { id: "a", text: "" },
      { id: "b", text: "" },
      { id: "c", text: "" },
      { id: "d", text: "" }
    ],
    correctOptionId: "a"
  };
}
function CreateQuizPage() {
  const nav = useNav();
  const { addQuiz } = useQuizStore();
  const [title, setTitle] = reactExports.useState("");
  const [questions, setQuestions] = reactExports.useState([makeQuestion()]);
  const [saved, setSaved] = reactExports.useState(false);
  const updateQuestion = (idx, patch) => {
    setQuestions(
      (prev) => prev.map((q, i) => i === idx ? { ...q, ...patch } : q)
    );
  };
  const updateOption = (qIdx, optId, text) => {
    setQuestions(
      (prev) => prev.map(
        (q, i) => i === qIdx ? {
          ...q,
          options: q.options.map(
            (o) => o.id === optId ? { ...o, text } : o
          )
        } : q
      )
    );
  };
  const removeQuestion = (idx) => {
    if (questions.length <= 1) return;
    setQuestions((prev) => prev.filter((_, i) => i !== idx));
  };
  const handleSave = () => {
    if (!title.trim()) return;
    const quiz = {
      id: makeId(),
      title: title.trim(),
      topic: title.trim(),
      createdBy: "teacher",
      createdAt: Date.now(),
      questions: questions.filter((q) => q.text.trim())
    };
    addQuiz(quiz);
    setSaved(true);
    setTimeout(() => nav.navigate({ page: "teacher-dashboard" }), 1e3);
  };
  const isValid = title.trim() && questions.some((q) => q.text.trim());
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Layout,
    {
      title: "Create Quiz",
      backButton: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "create_quiz.back_button",
          onClick: () => nav.navigate({ page: "teacher-dashboard" }),
          className: "p-1.5 rounded-lg hover:bg-secondary transition-smooth text-muted-foreground",
          "aria-label": "Back",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5" })
        }
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "quiz-title",
              className: "text-label text-muted-foreground block",
              children: "Quiz Title"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "quiz-title",
              type: "text",
              "data-ocid": "create_quiz.title_input",
              value: title,
              onChange: (e) => setTitle(e.target.value),
              placeholder: "e.g., Python Fundamentals",
              className: "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth font-body"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subheadline text-foreground", children: "Questions" }),
          questions.map((q, qIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `create_quiz.question_item.${qIdx + 1}`,
              className: "bg-card rounded-2xl border border-border p-4 space-y-3 shadow-subtle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-label text-primary mt-0.5", children: [
                    "Q",
                    qIdx + 1
                  ] }),
                  questions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `create_quiz.delete_question_button.${qIdx + 1}`,
                      onClick: () => removeQuestion(qIdx),
                      className: "p-1 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth",
                      "aria-label": "Remove question",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    "data-ocid": `create_quiz.question_text.${qIdx + 1}`,
                    value: q.text,
                    onChange: (e) => updateQuestion(qIdx, { text: e.target.value }),
                    placeholder: "Type your question here...",
                    rows: 2,
                    className: "w-full px-3 py-2.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth text-sm font-body resize-none"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium", children: "Options (tap to mark correct)" }),
                  q.options.map((opt, optIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `create_quiz.correct_option.${qIdx + 1}.${optIdx + 1}`,
                        onClick: () => updateQuestion(qIdx, { correctOptionId: opt.id }),
                        className: `w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold transition-smooth ${q.correctOptionId === opt.id ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground hover:bg-accent/20"}`,
                        "aria-label": `Mark option ${OPTION_LABELS[optIdx]} as correct`,
                        children: OPTION_LABELS[optIdx]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        "data-ocid": `create_quiz.option_input.${qIdx + 1}.${optIdx + 1}`,
                        value: opt.text,
                        onChange: (e) => updateOption(qIdx, opt.id, e.target.value),
                        placeholder: `Option ${OPTION_LABELS[optIdx]}`,
                        className: "flex-1 px-3 py-2 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth text-sm font-body"
                      }
                    )
                  ] }, opt.id))
                ] })
              ]
            },
            q.id
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "create_quiz.add_question_button",
              onClick: () => setQuestions((prev) => [...prev, makeQuestion()]),
              className: "w-full py-3 rounded-2xl border-2 border-dashed border-primary/40 text-primary font-display font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/5 transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                "Add Question"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "create_quiz.save_button",
            onClick: handleSave,
            disabled: !isValid || saved,
            className: "w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2",
            children: saved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
              "Saved!"
            ] }) : "Save Quiz"
          }
        )
      ] })
    }
  );
}
export {
  CreateQuizPage as default
};
