import { createAluno, deleteAluno, getAlunos, updateAluno } from "@/api/alunos";
import type { Aluno } from "@/types/aluno";
import { create } from "zustand";

interface AlunosState {
  alunos: Aluno[];
  selectedAluno: Aluno | null;
  setSelectedAluno: (aluno: Aluno | null) => void;
  fetchAlunos: () => Promise<void>;
  addAluno: (nome: string) => Promise<void>;
  editAluno: (id: number, nome: string) => Promise<void>;
  removeAluno: (id: number) => Promise<void>;
}

export const useAlunosStore = create<AlunosState>((set) => ({
  alunos: [],
  selectedAluno: null,
  setSelectedAluno: (aluno) => set({ selectedAluno: aluno }),

  fetchAlunos: async () => {
    const res = await getAlunos();
    set({ alunos: res.data });
  },

  addAluno: async (nome) => {
    await createAluno(nome);
    const res = await getAlunos();
    set({ alunos: res.data });
  },

  editAluno: async (id, nome) => {
    await updateAluno(id, nome);
    const res = await getAlunos();
    set({ alunos: res.data, selectedAluno: null });
  },

  removeAluno: async (id) => {
    await deleteAluno(id);
    const res = await getAlunos();
    set({ alunos: res.data });
  },
}));
