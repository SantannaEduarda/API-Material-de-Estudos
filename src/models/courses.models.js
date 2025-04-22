// Biblioteca que gera IDs
import { v4 as uuidv4 } from "uuid";

// Classe 'Curso' e seus atributos
export class Course {
  constructor(title, description, language, category) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.language = language;
    this.category = category;
  }
}
