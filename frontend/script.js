const BASE_URL = "http://localhost:3000";

function loadCourses() {
  fetch(`${BASE_URL}/cursos`)
    .then(res => res.json())
    .then(data => {
      displayResults(data.courseList, "Curso");
    });
}

function loadMaterials() {
  fetch(`${BASE_URL}/materiais`)
    .then(res => res.json())
    .then(data => {
      displayResults(data.list, "Material");
    });
}

function displayResults(items, type) {
  const container = document.getElementById("results");
  container.innerHTML = `<h2>${type}s encontrados:</h2>`;

  if (items.length === 0) {
    container.innerHTML += "<p>Nenhum resultado encontrado.</p>";
    return;
  }

  items.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.title}</h3>
        <p><strong>Categoria:</strong> ${item.category}</p>
        <p><strong>Idioma:</strong> ${item.language}</p>
        ${item.description ? `<p>${item.description}</p>` : ""}
        ${item.url ? `<p><a href="${item.url}" target="_blank">Acessar material</a></p>` : ""}
      </div>
    `;
  });
}
