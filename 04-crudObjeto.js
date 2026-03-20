// Crearemos un CRUD en base a objetos con clave y valor
lista = [
  { id: 1, nombre: 'Oscar', edad: 24 },
  { id: 2, nombre: 'Daniela', edad: 27 },
  { id: 3, nombre: 'Alex', edad: 23 },
  { id: 4, nombre: 'Fernanda', edad: 30 }
];

function listar() {

  if (lista.length <= 0) return console.log(`No existen usuarios registrados`);

  for (const usuario of lista) {
    console.log(`${usuario.id}. Nombre: ${usuario.nombre} - Edad: ${usuario.edad}`);
  }

  console.log(`Total de usuarios: ${lista.length} \n`);
}

// Buscar por nombre
function buscarNombre(nombre) {
  const usuario = lista.find(u => u.nombre.trim().toUpperCase() === nombre.trim().toUpperCase())
  if (!usuario) return console.log(`Usuario con nombre '${nombre}' no encontrado!\n`);
  
  console.log(`${usuario.id}. Nombre: ${usuario.nombre} - Edad: ${usuario.edad} \n`)
}
// Buscar por edad
function buscarEdad(edad) {
  const usuarios = lista.filter(u => u.edad === edad);

  if (usuarios.length <= 0) return console.log(`No existen Usuario(s) con ${edad} años.\n`)

  for (const usuario of usuarios) {
    console.log(`${usuario.id}. Nombre: ${usuario.nombre} - Edad: ${usuario.edad}`);
  }
}

// Tendremos validaciones de no insertar un objeto con un nombre ya existente en la misma lista, ni el id repetido
function crear(objeto) {
  const existe = lista.find(u => u.nombre === objeto.nombre && u.id === objeto.id);

  if (existe) return console.log(`El usuario ${objeto.nombre} ya existe!\n`);

  const newId = lista.length > 0 ? (Math.max(...lista.map(u => u.id)) + 1) : 0;

  const nuevoUsuario = {
    id: newId,
    nombre: objeto.nombre,
    edad: objeto.edad
  };

  lista.push(nuevoUsuario);
  console.log(`Usuario ${objeto.nombre} creado con exito!\n`);
  listar()
}

function actualizar(nombre, objetoNuevo) {
  const index = lista.findIndex(u => u.nombre.trim().toUpperCase() === nombre.trim().toUpperCase())

  if (index <= -1) return console.log(`No existe el usuario '${nombre}'!\n`);

  const usuarioActualizado = {
    id: lista[index].id,
    nombre: objetoNuevo.nombre,
    edad: objetoNuevo.edad
  };

  lista[index] = usuarioActualizado;
  console.log(`Usuario '${nombre}' actualizado con exito por '${usuarioActualizado.nombre}' !\n`);
  listar()
}

// Eliminar
function eliminar(nombre) {
  const index = lista.findIndex(u => u.nombre.trim().toUpperCase() === nombre.trim().toUpperCase())

  if (index <= -1) return console.log(`No existe el usuario '${nombre}'!\n`);

  lista.splice(index, 1);
  console.log(`Usuario '${nombre}' - eliminado con exito\n`);
  listar()
}


listar()
crear({
  nombre: 'Nayeli',
  edad: 23
})
listar()
buscarNombre('oscar')
buscarEdad(23)
actualizar("oscar" ,{
  nombre: 'Erwin',
  edad: 38
})
eliminar('erwin')
crear({
  nombre: 'Oscar',
  edad: 24
})