import { u as useAuthStore, a as useNav, j as jsxRuntimeExports } from "./index-CvRvPOZM.js";
import { L as Layout, B as BookOpen } from "./Layout-BD15tm6S.js";
import { u as useQuizStore } from "./quizStore-D_LTbw6t.js";
import { P as Plus } from "./plus-BGeam5Tr.js";
import { S as Sparkles } from "./sparkles-CixeY9rq.js";
import { C as Clock } from "./clock-ButitRSs.js";
import { C as ChevronRight } from "./chevron-right-DRU3fgvc.js";
function QuizCard({ quiz, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `teacher.quiz_item.${index + 1}`,
      className: "bg-card rounded-2xl border border-border p-4 flex items-center gap-4 shadow-subtle transition-smooth hover:shadow-md hover:border-primary/30",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground truncate", children: quiz.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs font-medium px-2 py-0.5 rounded-full ${quiz.createdBy === "ai" ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"}`,
                children: quiz.createdBy === "ai" ? "✦ AI" : "Manual"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              quiz.questions.length,
              " questions"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground flex-shrink-0" })
      ]
    }
  );
}
function TeacherDashboard() {
  const { userName } = useAuthStore();
  const { quizzes } = useQuizStore();
  const nav = useNav();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { title: "Dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card-elevated rounded-2xl p-5 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label text-muted-foreground mb-1", children: "Good day," }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-headline text-foreground", children: [
        userName,
        " 👋"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Ready to create something great today?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "teacher.create_quiz_button",
          onClick: () => nav.navigate({ page: "create-quiz" }),
          className: "bg-primary text-primary-foreground rounded-2xl p-4 flex flex-col items-start gap-3 shadow-md transition-smooth hover:opacity-90 active:scale-[0.98]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm leading-tight", children: "Create Quiz" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "teacher.generate_quiz_button",
          onClick: () => nav.navigate({ page: "generate-quiz" }),
          className: "bg-accent text-accent-foreground rounded-2xl p-4 flex flex-col items-start gap-3 shadow-md transition-smooth hover:opacity-90 active:scale-[0.98]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm leading-tight", children: "Generate with AI" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subheadline text-foreground", children: "Your Quizzes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full", children: [
          quizzes.length,
          " total"
        ] })
      ] }),
      quizzes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "teacher.quiz_list.empty_state",
          className: "bg-card rounded-2xl border border-dashed border-border p-8 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-8 h-8 text-muted-foreground mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: "No quizzes yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Create your first quiz above" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: quizzes.map((quiz, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(QuizCard, { quiz, index: i }, quiz.id)) })
    ] })
  ] }) });
}
export {
  TeacherDashboard as default
};
