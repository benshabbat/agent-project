import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {getAgentRequest} from "../services/agentServices"

interface Report{
    id:string;
    title:string;
    content:string;
}

interface ReportsState {
  reports:Report[]|null;
  getReport: (id:string)=> Promise<Report|null|unknown>;
}


export const useReportsStore = create<ReportsState>()(persist((set)=>({
  reports :null,
  getReport : async (id:string) =>set({ reports: await getAgentRequest(id)})
}), {name: 'reports-storage'}))