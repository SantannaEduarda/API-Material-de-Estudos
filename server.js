import express from "express";
import cors from "cors";
import { coursesRouter } from "./src/routes/courses.routes.js";
import { materialsRouter } from "./src/routes/materials.routes.js";



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Rotas
app.use(coursesRouter);

app.use(materialsRouter);

app.listen(port, () => {
  console.log(`API de Material de estudos Tech rodando na porta ${port}`);
});
