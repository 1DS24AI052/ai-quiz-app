import { a as useNav, r as reactExports, j as jsxRuntimeExports } from "./index-CvRvPOZM.js";
import { L as Layout } from "./Layout-BD15tm6S.js";
import { u as useQuizStore } from "./quizStore-D_LTbw6t.js";
import { C as ChevronRight } from "./chevron-right-DRU3fgvc.js";
import { A as ArrowLeft } from "./arrow-left-BzHFHNRS.js";
const OPTION_LABELS = ["A", "B", "C", "D"];
function QuizAttemptPage({ quizId }) {
  var _a;
  const nav = useNav();
  const { quizzes, answerQuestion, submitAttempt, currentAttempt } = useQuizStore();
  const [currentIdx, setCurrentIdx] = reactExports.useState(0);
  const quiz = quizzes.find((q) => q.id === quizId);
  if (!quiz) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { title: "Quiz", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Quiz not found." }) }) });
  }
  const question = quiz.questions[currentIdx];
  const totalQuestions = quiz.questions.length;
  const selectedOptionId = (_a = currentAttempt == null ? void 0 : currentAttempt.answers) == null ? void 0 : _a[question.id];
  const isLast = currentIdx === totalQuestions - 1;
  const handleNext = () => {
    if (isLast) {
      submitAttempt(quizId);
      nav.navigate({ page: "result", quizId });
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };
  const progress = (currentIdx + 1) / totalQuestions * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Layout,
    {
      title: quiz.title,
      backButton: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "quiz_attempt.back_button",
          onClick: () => nav.navigate({ page: "student-dashboard" }),
          className: "p-1.5 rounded-lg hover:bg-secondary transition-smooth text-muted-foreground",
          "aria-label": "Back",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5" })
        }
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Question ",
              currentIdx + 1,
              " of ",
              totalQuestions
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              Math.round(progress),
              "% complete"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-primary rounded-full transition-all duration-500",
              style: { width: `${progress}%` }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `quiz_attempt.question_card.${currentIdx + 1}`,
            className: "bg-card-elevated rounded-2xl border border-border p-5 shadow-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-label text-primary mb-3", children: [
                "Question ",
                currentIdx + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-base leading-snug", children: question.text })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "space-y-3",
            role: "radiogroup",
            "aria-label": "Answer options",
            children: question.options.map((opt, optIdx) => {
              const isSelected = selectedOptionId === opt.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "aria-pressed": isSelected,
                  "data-ocid": `quiz_attempt.option.${currentIdx + 1}.${optIdx + 1}`,
                  onClick: () => answerQuestion(question.id, opt.id),
                  className: `w-full px-4 py-3.5 rounded-2xl border-2 text-left flex items-center gap-3 transition-smooth ${isSelected ? "border-primary bg-primary/8 shadow-md" : "border-border bg-card hover:border-primary/40 hover:bg-secondary/50"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 transition-smooth ${isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
                        children: OPTION_LABELS[optIdx]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-sm font-medium leading-snug ${isSelected ? "text-primary" : "text-foreground"}`,
                        children: opt.text
                      }
                    )
                  ]
                },
                opt.id
              );
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": isLast ? "quiz_attempt.submit_button" : "quiz_attempt.next_button",
            onClick: handleNext,
            disabled: !selectedOptionId,
            className: "w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base flex items-center justify-center gap-2 transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-md",
            children: [
              isLast ? "Submit Quiz" : "Next Question",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
            ]
          }
        )
      ] })
    }
  );
}
export {
  QuizAttemptPage as default
};
