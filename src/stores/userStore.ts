import { create } from 'zustand';

interface UserProfile {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    imageUrl: string;
}

interface UserStore {
    user: UserProfile | null;
    isLoaded: boolean;
    setUser: (user: UserProfile | null) => void;
    setLoaded: (loaded: boolean) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    isLoaded: false,
    setUser: (user) => set({ user }),
    setLoaded: (isLoaded) => set({ isLoaded }),
    clearUser: () => set({ user: null }),
}));
