import { Router } from "express";
import {
  getAllMaterials,
  getMaterialsByCategory
} from "../controllers/materials.controllers.js";

const materialsRouter = Router();

// GET todos os materiais
materialsRouter.get("/materiais", (req, res) => {
  const filter = req.query;
  const list = getAllMaterials(filter);
  res.status(200).json({ list });
});

// GET materiais por categoria (ex: /materiais/categoria/Dados)
materialsRouter.get("/materiais/categoria/:categoria", (req, res) => {
  const { categoria } = req.params;
  const materials = getMaterialsByCategory(categoria);
  if (materials.length > 0) {
    return res.status(200).json({ materials });
  }
  return res.status(404).json({ error: "Nenhum material encontrado para essa categoria" });
});

export { materialsRouter };
