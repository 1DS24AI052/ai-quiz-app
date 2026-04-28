import { create } from "zustand";
import type { Role } from "../types/quiz";

interface AuthState {
  isLoggedIn: boolean;
  role: Role | null;
  userName: string;
  login: (role: Role, name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  role: null,
  userName: "",
  login: (role, name) => set({ isLoggedIn: true, role, userName: name }),
  logout: () => set({ isLoggedIn: false, role: null, userName: "" }),
}));
