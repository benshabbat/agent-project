import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the shape of the user data
interface User {
  email: string;
  id: string;
  name?: string; // Optional name field
}

// Define the shape of the store's state and actions
interface AuthStoreState {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStoreState>()(
  // Use 'persist' middleware to keep the state in localStorage
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      
      login: (userData) => {
        set({
          user: userData,
          isAuthenticated: true,
        });
      },
      
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'user-auth-storage', // name of the item in the local storage
      storage: createJSONStorage(() => localStorage), // Use localStorage for storage
    }
  )
);

export default useAuthStore;