// Biblioteca que gera IDs
import { v4 as uuidv4 } from "uuid";

// Classe 'Material' e seus atributos
export class Material {
  constructor(title, type, url, language, category) {
    this.id = uuidv4();
    this.title = title;
    this.type = type; // Ex: PDF, Roadmap, Video, Artigo
    this.url = url;
    this.language = language;
    this.category = category;
  }
}
