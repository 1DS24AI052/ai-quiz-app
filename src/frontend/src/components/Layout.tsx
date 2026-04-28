import { BookOpen, LogOut, User } from "lucide-react";
import type { ReactNode } from "react";
import { useAuthStore } from "../store/authStore";

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  title?: string;
  backButton?: ReactNode;
}

export function Layout({
  children,
  showHeader = true,
  title,
  backButton,
}: LayoutProps) {
  const { isLoggedIn, role, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showHeader && isLoggedIn && (
        <header className="bg-card border-b border-border shadow-subtle sticky top-0 z-30">
          <div className="max-w-lg mx-auto px-4 h-14 flex items-center gap-3">
            {backButton && <div className="flex-shrink-0">{backButton}</div>}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {!backButton && (
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
              )}
              {title ? (
                <span className="font-display font-semibold text-foreground truncate">
                  {title}
                </span>
              ) : (
                <span className="font-display font-bold text-foreground">
                  QuizAI
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary">
                <User className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground capitalize">
                  {role}
                </span>
              </div>
              <button
                type="button"
                data-ocid="header.logout_button"
                onClick={logout}
                className="p-1.5 rounded-lg hover:bg-secondary transition-smooth text-muted-foreground hover:text-foreground"
                aria-label="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>
      )}

      {showHeader && !isLoggedIn && (
        <header className="bg-card border-b border-border shadow-subtle">
          <div className="max-w-lg mx-auto px-4 h-14 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-foreground">
              QuizAI
            </span>
          </div>
        </header>
      )}

      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6">
        {children}
      </main>

      <footer className="bg-muted/40 border-t border-border py-4">
        <div className="max-w-lg mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
