import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./jobs.db");

db.run(`
CREATE TABLE IF NOT EXISTS jobs(
  id INTEGER PRIMARY KEY,
  title TEXT,
  company TEXT,
  link TEXT
)
`);

export default db;