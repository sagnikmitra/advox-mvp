import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  userType: 'lawyer' | 'client' | null;
  login: (type: 'lawyer' | 'client') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userType: null,
  login: (type) => set({ isAuthenticated: true, userType: type }),
  logout: () => set({ isAuthenticated: false, userType: null }),
}));