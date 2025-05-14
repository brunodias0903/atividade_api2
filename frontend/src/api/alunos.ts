import axios from "axios";
import { BASE_URL } from "../api/base_url";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getAlunos = () => api.get("/alunos");
export const createAluno = (nome: string) => api.post("/alunos", { nome });
export const updateAluno = (id: number, nome: string) =>
  api.put(`/alunos/${id}`, { nome });
export const deleteAluno = (id: number) => api.delete(`/alunos/${id}`);
