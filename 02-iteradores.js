lista = [1, 2, 3, 4, 5, 5, 5, 1, 2, 3, 4, 1, 2, 1, 3, 1];
list = [
  {nombre: 'Oscar', edad: 24},
  {nombre: 'Alex', edad: 23},
]

const listaNueva = lista.map(i => i);

const listaFiltrada = lista.filter(i => i === 5);

const listaEncontrada = lista.find(i => i === 5);

const indiceEncontrado = lista.find(i => i === 5);