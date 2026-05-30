const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "Laptop",
      precio: 6500
    },
    {
      id: 2,
      nombre: "Mouse",
      precio: 150
    },
    {
      id: 3,
      nombre: "Teclado",
      precio: 300
    }
  ]);
});

module.exports = router;