import { u as useAuthStore, r as reactExports, j as jsxRuntimeExports } from "./index-CvRvPOZM.js";
import { c as createLucideIcon, L as Layout, B as BookOpen } from "./Layout-BD15tm6S.js";
import { S as Sparkles } from "./sparkles-CixeY9rq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode);
function LoginPage() {
  const { login } = useAuthStore();
  const [selectedRole, setSelectedRole] = reactExports.useState(null);
  const [name, setName] = reactExports.useState("");
  const handleLogin = () => {
    if (!selectedRole || !name.trim()) return;
    login(selectedRole, name.trim());
  };
  const roles = [
    {
      value: "teacher",
      label: "Teacher",
      description: "Create and manage quizzes",
      icon: BookOpen
    },
    {
      value: "student",
      label: "Student",
      description: "Take quizzes and track progress",
      icon: GraduationCap
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { showHeader: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 pt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-headline text-foreground", children: "Welcome to QuizAI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "AI-powered quizzes for teachers and students" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: "name",
          className: "text-label text-muted-foreground block",
          children: "Your Name"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "name",
          type: "text",
          "data-ocid": "login.name_input",
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: "Enter your name",
          className: "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth font-body"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label text-muted-foreground", children: "Select Your Role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: roles.map(({ value, label, description, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": `login.role_${value}`,
          onClick: () => setSelectedRole(value),
          className: `p-4 rounded-2xl border-2 text-left transition-smooth flex flex-col gap-2 ${selectedRole === value ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/40 hover:bg-secondary/50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-10 h-10 rounded-xl flex items-center justify-center ${selectedRole === value ? "bg-primary/15" : "bg-muted"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    className: `w-5 h-5 ${selectedRole === value ? "text-primary" : "text-muted-foreground"}`
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `font-display font-semibold text-sm ${selectedRole === value ? "text-primary" : "text-foreground"}`,
                  children: label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-tight mt-0.5", children: description })
            ] })
          ]
        },
        value
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "login.submit_button",
        onClick: handleLogin,
        disabled: !selectedRole || !name.trim(),
        className: "w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-md",
        children: "Get Started"
      }
    )
  ] }) });
}
export {
  LoginPage as default
};
