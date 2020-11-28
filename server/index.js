const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(express.json());

// DEFINIR ROTAS
app.use('/', require('./routes/pages'))

app.listen(PORT, () => {
  console.log("Server running on port 5000!");
});
