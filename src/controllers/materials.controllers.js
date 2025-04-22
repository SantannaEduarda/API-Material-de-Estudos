import { Material } from "../models/materials.models.js";

// Importa os dados mockados no JSON
import fs from "fs";
const materials = JSON.parse(fs.readFileSync("src/data/materials.json", "utf-8"));

// Exporta a rota GET com todos os materiais
export const getAllMaterials = (filter) => {
  if (!filter || Object.keys(filter).length === 0) return materials;

  return materials.filter(material =>
    Object.entries(filter).every(([key, value]) =>
      String(material[key]).toLowerCase().includes(String(value).toLowerCase())
    )
  );
};

// Exporta o GET por categoria
export const getMaterialsByCategory = (category) => {
  return materials.filter(material =>
    material.category.toLowerCase() === category.toLowerCase()
  );
};
