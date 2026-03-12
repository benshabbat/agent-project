import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { loginRequest, type LoginForm } from '../services/authServices';

type Role = "admin"|"agent"

interface User{
  role:Role;
  agentCode:string;
  password:string;
  fullName:string;
}
interface AuthState {
  user:User|null;
  login: (form:LoginForm)=> Promise<User|null|unknown>;
}


export const useAuthStore = create<AuthState>()(persist((set)=>({
  user: null,
  login : async (form:LoginForm) =>set({ user: await loginRequest(form)}),
}), {name: 'auth-storage'}))