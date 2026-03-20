// Lista con el que ocuparas el crud
const lista = ["Oscar", "Jesus", "Alex", "Bruno", "Daniela", "Maria"];

// Quiero que de esa lista me muestres todos los usuarios, puedas filtrar usuario por nombre, actualizar el nombre del usuario y eliminar un usuario por nombre.

function crear(nombre) {
  const existed = lista.find(v => v.toUpperCase().trim() === nombre.toUpperCase().trim());
  if (existed) return console.log(`Ya existe el nombre '${nombre}!'`);
  lista.push(nombre);
  console.log(`El nombre '${nombre}' fue creado con exito!`)
}

function listar() {
  console.log(`${lista.map((u, _) => `${_+1}. ${u}`)}`)
}

function buscar(nombre) {
  const existe = lista.find(u => u.trim().toUpperCase() === nombre.trim().toUpperCase());
  if (!existe) return console.log(`El usuario '${nombre} no fue encontrado!'`);
  console.log(`Usuario '${nombre}' encontrado!`);
}

function actualizar(nombre, nuevoNombre) {
  const index = lista.findIndex(u => u === nombre);
  if (index === -1) return console.log(`Usuario '${nombre}' no existe!`);

  const existe = lista.some(u => u.trim().toLocaleUpperCase() === nuevoNombre.trim().toLocaleUpperCase());
  if (existe) return console.log(`Usuario '${nuevoNombre}' ya existe!`);

  lista[index] = nuevoNombre;
  console.log(`Nombre '${nombre}' actualizado por '${nuevoNombre}'`);
}

function eliminar(nombre) {
  const index = lista.findIndex(u => u.trim().toLocaleUpperCase() === nombre.trim().toUpperCase())
  if (index === -1) return console.log(`Usuario '${nombre}' no existe!'`);
  
  lista.splice(index, 1);
  console.log(`Usuario '${nombre}' eliminado con exito!'`)
}

listar();
crear("Luis")
buscar("Oscar")
actualizar("Oscar", "Nayeli")
listar()
eliminar("Nayeli")
listar()