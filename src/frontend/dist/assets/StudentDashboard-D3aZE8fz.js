import { u as useAuthStore, j as jsxRuntimeExports, a as useNav } from "./index-CvRvPOZM.js";
import { c as createLucideIcon, L as Layout, B as BookOpen } from "./Layout-BD15tm6S.js";
import { u as useQuizStore } from "./quizStore-D_LTbw6t.js";
import { S as Sparkles } from "./sparkles-CixeY9rq.js";
import { C as Clock } from "./clock-ButitRSs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode);
function QuizCard({ quiz, index }) {
  const nav = useNav();
  const { startAttempt } = useQuizStore();
  const handleStart = () => {
    startAttempt(quiz.id);
    nav.navigate({ page: "quiz-attempt", quizId: quiz.id });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `student.quiz_item.${index + 1}`,
      className: "bg-card rounded-2xl border border-border p-4 shadow-subtle",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground truncate", children: quiz.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              quiz.createdBy === "ai" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium px-1.5 py-0.5 rounded-full bg-accent/15 text-accent flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5" }),
                "AI"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                quiz.questions.length,
                " questions"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `student.start_quiz_button.${index + 1}`,
            onClick: handleStart,
            className: "w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm flex items-center justify-center gap-2 transition-smooth hover:opacity-90 active:scale-[0.98] shadow-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
              "Start Quiz"
            ]
          }
        )
      ]
    }
  );
}
function StudentDashboard() {
  const { userName } = useAuthStore();
  const { quizzes } = useQuizStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { title: "Dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card-elevated rounded-2xl p-5 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label text-muted-foreground mb-1", children: "Welcome back," }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-headline text-foreground", children: [
        userName,
        " 👋"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
        quizzes.length,
        " quiz",
        quizzes.length !== 1 ? "zes" : "",
        " available to take"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subheadline text-foreground", children: "Available Quizzes" }),
      quizzes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "student.quiz_list.empty_state",
          className: "bg-card rounded-2xl border border-dashed border-border p-8 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-8 h-8 text-muted-foreground mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: "No quizzes available" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Ask your teacher to create one" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: quizzes.map((quiz, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(QuizCard, { quiz, index: i }, quiz.id)) })
    ] })
  ] }) });
}
export {
  StudentDashboard as default
};
