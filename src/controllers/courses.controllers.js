import { Course } from "../models/courses.models.js";

// Importa os dados mockados do JSON
import fs from "fs";
const courses = JSON.parse(fs.readFileSync("src/data/courses.json", "utf-8")); 

// Exporta a rota GET com todos os cursos
export const getAllCourses = (filter) => {
  if (!filter || Object.keys(filter).length === 0) return courses;

  return courses.filter(course =>
    Object.entries(filter).every(([key, value]) =>
      String(course[key]).toLowerCase().includes(String(value).toLowerCase())
    )
  );
};

// Exporta o GET por ID
export const getCourseById = (id) => {
  return courses.find(course => course.id === id);
};

// Exporta o GET por categoria
export const getCoursesByCategory = (category) => {
  return courses.filter(course =>
    course.category.toLowerCase() === category.toLowerCase()
  );
};