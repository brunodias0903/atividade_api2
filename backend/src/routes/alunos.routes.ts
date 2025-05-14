import { Router } from "express";
import { db } from "../database/db";
import { Aluno } from "../types/aluno";

const router = Router();

router.get("/", (_, res) => {
  res.send("API funcionando!");
});

router.get("/alunos", (_, res) => {
  db.all<Aluno[]>("SELECT * FROM Alunos", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

router.post("/alunos", (req, res) => {
  const { nome } = req.body;

  const checkSql = "SELECT * FROM Alunos WHERE nome = ?";
  db.get(checkSql, [nome], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (row) return res.status(400).json({ error: "Aluno já cadastrado" });

    const insertSql = "INSERT INTO Alunos (nome) VALUES (?)";
    db.run(insertSql, [nome], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res
        .status(201)
        .json({ message: "Aluno criado com sucesso!", id: this.lastID });
    });
  });
});

router.put("/alunos/:id", (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  const sql = "UPDATE Alunos SET nome = ? WHERE id = ?";
  db.run(sql, [nome, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0)
      return res.status(404).json({ error: "Aluno não encontrado" });
    res.json({ message: "Aluno atualizado com sucesso" });
  });
});

router.delete("/alunos/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM Alunos WHERE id = ?";
  db.run(sql, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0)
      return res.status(404).json({ error: "Aluno não encontrado" });
    res.json({ message: "Aluno excluído com sucesso" });
  });
});

export default router;
