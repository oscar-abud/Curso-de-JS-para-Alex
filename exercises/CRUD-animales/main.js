const $ = (arg) => document.querySelector(arg);

// Agregamos IDs reales para que sea más fácil trabajar
let animales = [
  { id: 1, nombre: "Firulais", tipo: "Perro" },
  { id: 2, nombre: "Michi", tipo: "Gato" }
];

const loadInitialTemplate = () => {
  document.body.innerHTML = `
    <h1>Animales</h1>
    <form id="animal-form">
      <div>
        <label>Nombre</label>
        <input type='text' id="name" required />
      </div>
      <div>
        <label>Tipo</label>
        <input type='text' id="type" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
    <ul id="animal-list" class="lista"></ul>
  `;
}

const eliminarAnimal = (id) => {
  animales = animales.filter(animal => animal.id !== id);
  renderList();
  alert('Eliminado con éxito');
};

const renderList = () => {
  const ul = $("#animal-list");
  if (!ul) return;

  ul.innerHTML = animales.map((animal) => `
    <li>
      <strong>${animal.nombre}</strong> - ${animal.tipo}
      <button class="btn-delete" data-id="${animal.id}">Eliminar</button>
    </li>
  `).join('');

  document.querySelectorAll('.btn-delete').forEach(boton => {
    boton.onclick = () => eliminarAnimal(Number(boton.dataset.id));
  });
}

window.onload = () => {
  loadInitialTemplate();
  renderList();

  $("#animal-form").onsubmit = (e) => {
    e.preventDefault();
    const nombre = $("#name").value;
    const tipo = $("#type").value;

    if (!nombre.trim() || !tipo.trim()) return;

    // Creamos el nuevo objeto con un ID único
    animales.push({ id: Date.now(), nombre, tipo });

    renderList();
    e.target.reset();
    $("#name").focus();
  };
}