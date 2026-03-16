import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { loginRequest, type LoginForm } from '../services/authServices';
import {getAgentRequest} from "../services/agentServices"


type Role = "admin"|"agent"

interface Agent{
  id:string;
  role:Role;
  agentCode:string;
  fullName:string;
}

interface AuthState {
  agentState:Agent|null;
  login: (form:LoginForm)=> Promise<Agent|string|null|unknown>;
  getAgent: (id:string)=> Promise<Agent|null|unknown>;
}


export const useAuthStore = create<AuthState>()(persist((set)=>({
  agentState: null,
  reports :[],
  login : async (form:LoginForm) =>set({ agentState: await loginRequest(form)}),
  getAgent : async (id:string) =>set({ agentState: await getAgentRequest(id)})
}), {name: 'auth-storage'}))