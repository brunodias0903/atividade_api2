import sqlite3 from "sqlite3";

sqlite3.verbose();

export const db = new sqlite3.Database("./banco_de_dados.db", (err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS Alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
  )
`);
