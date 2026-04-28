import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuthStore } from "../store/authStore";
import type { Role } from "../types/quiz";

export default function LoginPage() {
  const { login } = useAuthStore();
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!selectedRole || !name.trim()) return;
    login(selectedRole, name.trim());
  };

  const roles: {
    value: Role;
    label: string;
    description: string;
    icon: typeof GraduationCap;
  }[] = [
    {
      value: "teacher",
      label: "Teacher",
      description: "Create and manage quizzes",
      icon: BookOpen,
    },
    {
      value: "student",
      label: "Student",
      description: "Take quizzes and track progress",
      icon: GraduationCap,
    },
  ];

  return (
    <Layout showHeader={true}>
      <div className="flex flex-col gap-8 pt-4">
        {/* Hero */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-headline text-foreground">Welcome to QuizAI</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            AI-powered quizzes for teachers and students
          </p>
        </div>

        {/* Name Input */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-label text-muted-foreground block"
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            data-ocid="login.name_input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth font-body"
          />
        </div>

        {/* Role Selection */}
        <div className="space-y-3">
          <p className="text-label text-muted-foreground">Select Your Role</p>
          <div className="grid grid-cols-2 gap-3">
            {roles.map(({ value, label, description, icon: Icon }) => (
              <button
                key={value}
                type="button"
                data-ocid={`login.role_${value}`}
                onClick={() => setSelectedRole(value)}
                className={`p-4 rounded-2xl border-2 text-left transition-smooth flex flex-col gap-2 ${
                  selectedRole === value
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-card hover:border-primary/40 hover:bg-secondary/50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    selectedRole === value ? "bg-primary/15" : "bg-muted"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${selectedRole === value ? "text-primary" : "text-muted-foreground"}`}
                  />
                </div>
                <div>
                  <p
                    className={`font-display font-semibold text-sm ${selectedRole === value ? "text-primary" : "text-foreground"}`}
                  >
                    {label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight mt-0.5">
                    {description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Login Button */}
        <button
          type="button"
          data-ocid="login.submit_button"
          onClick={handleLogin}
          disabled={!selectedRole || !name.trim()}
          className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base transition-smooth hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
        >
          Get Started
        </button>
      </div>
    </Layout>
  );
}
