import cors from "cors";
import express from "express";
import alunosRoutes from "./routes/alunos.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(alunosRoutes);

export default app;
