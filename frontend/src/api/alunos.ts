import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAlunos = () => api.get("/alunos");
export const createAluno = (nome: string) => api.post("/alunos", { nome });
export const updateAluno = (id: number, nome: string) =>
  api.put(`/alunos/${id}`, { nome });
export const deleteAluno = (id: number) => api.delete(`/alunos/${id}`);
