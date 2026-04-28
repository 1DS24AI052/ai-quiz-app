import { a as useNav, j as jsxRuntimeExports } from "./index-CvRvPOZM.js";
import { c as createLucideIcon, L as Layout } from "./Layout-BD15tm6S.js";
import { u as useQuizStore } from "./quizStore-D_LTbw6t.js";
import { C as CircleCheckBig } from "./circle-check-big-ZoL-LoZ6.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
function ScoreRing({ score, total }) {
  const pct = total > 0 ? score / total : 0;
  const size = 120;
  const stroke = 8;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex items-center justify-center",
      style: { width: size, height: size },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            width: size,
            height: size,
            className: "-rotate-90",
            "aria-label": "Score ring",
            role: "img",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: size / 2,
                  cy: size / 2,
                  r,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: stroke,
                  className: "text-secondary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: size / 2,
                  cy: size / 2,
                  r,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: stroke,
                  strokeDasharray: circ,
                  strokeDashoffset: offset,
                  strokeLinecap: "round",
                  className: pct >= 0.7 ? "text-accent" : pct >= 0.4 ? "text-primary" : "text-destructive",
                  style: { transition: "stroke-dashoffset 0.8s ease" }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-display font-bold text-foreground", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "/ ",
            total
          ] })
        ] })
      ]
    }
  );
}
function ResultPage({ quizId }) {
  const nav = useNav();
  const { quizzes, currentAttempt, startAttempt, clearAttempt } = useQuizStore();
  const quiz = quizzes.find((q) => q.id === quizId);
  const attempt = currentAttempt;
  if (!quiz || !attempt || attempt.score === void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { title: "Result", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No result found." }) }) });
  }
  const pct = attempt.total > 0 ? attempt.score / attempt.total : 0;
  const feedbackLabel = pct >= 0.8 ? "Excellent!" : pct >= 0.6 ? "Good Job!" : pct >= 0.4 ? "Keep Practicing" : "Needs Improvement";
  const feedbackColor = pct >= 0.7 ? "text-accent" : pct >= 0.4 ? "text-primary" : "text-destructive";
  const handleRetry = () => {
    clearAttempt();
    startAttempt(quizId);
    nav.navigate({ page: "quiz-attempt", quizId });
  };
  const handleHome = () => {
    clearAttempt();
    nav.navigate({ page: "student-dashboard" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { title: "Results", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "result.score_card",
        className: "bg-card-elevated rounded-2xl border border-border p-6 flex flex-col items-center gap-4 shadow-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreRing, { score: attempt.score, total: attempt.total }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-subheadline font-display font-bold ${feedbackColor}`,
                children: feedbackLabel
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
              "You answered ",
              attempt.score,
              " out of ",
              attempt.total,
              " questions correctly"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-accent/10 rounded-xl p-3 text-center border border-accent/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-accent", children: attempt.score }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Correct" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-destructive/10 rounded-xl p-3 text-center border border-destructive/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-destructive", children: attempt.total - attempt.score }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Wrong" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-secondary rounded-xl p-3 text-center border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-display font-bold text-foreground", children: [
                Math.round(pct * 100),
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Score" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subheadline text-foreground", children: "Answer Review" }),
      quiz.questions.map((q, idx) => {
        var _a;
        const userAns = (_a = attempt.answers) == null ? void 0 : _a[q.id];
        const isCorrect = userAns === q.correctOptionId;
        const correctOption = q.options.find(
          (o) => o.id === q.correctOptionId
        );
        const userOption = q.options.find((o) => o.id === userAns);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-ocid": `result.answer_item.${idx + 1}`,
            className: `bg-card rounded-2xl border p-4 shadow-subtle ${isCorrect ? "border-accent/30" : "border-destructive/30"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
              isCorrect ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-accent flex-shrink-0 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-destructive flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground leading-snug", children: q.text }),
                !isCorrect && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-1", children: [
                  userOption && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-destructive", children: [
                    "Your answer:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: userOption.text })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-accent", children: [
                    "Correct:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: correctOption == null ? void 0 : correctOption.text })
                  ] })
                ] })
              ] })
            ] })
          },
          q.id
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "result.retry_button",
          onClick: handleRetry,
          className: "py-3 rounded-xl border-2 border-primary text-primary font-display font-semibold text-sm flex items-center justify-center gap-2 transition-smooth hover:bg-primary/5 active:scale-[0.98]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
            "Try Again"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "result.home_button",
          onClick: handleHome,
          className: "py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm flex items-center justify-center gap-2 transition-smooth hover:opacity-90 active:scale-[0.98] shadow-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-4 h-4" }),
            "Dashboard"
          ]
        }
      )
    ] })
  ] }) });
}
export {
  ResultPage as default
};
