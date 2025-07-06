const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/jugadores", (req, res) => {
  db.query("SELECT * FROM jugadores", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.post("/jugadores", (req, res) => {
  const { nombre, dorsal, experiencia, posicion } = req.body;
  const sql =
    "INSERT INTO jugadores (nombre, dorsal, experiencia, posicion) VALUES (?, ?, ?, ?)";
  db.query(sql, [nombre, dorsal, experiencia, posicion], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, nombre, dorsal, experiencia, posicion });
  });
});

module.exports = router;
