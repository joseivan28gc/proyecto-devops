const express = require("express");
const productosRoutes = require("./routes/productos");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Proyecto DevOps AWS funcionando");
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    environment: "AWS",
    docker: true
  });
});

app.use("/productos", productosRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});