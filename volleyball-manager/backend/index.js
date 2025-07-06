const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

const PORT = 3000; // o cualquier otro puerto libre
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
