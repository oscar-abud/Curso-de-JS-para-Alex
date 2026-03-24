// En javaScript tenemos variables que no le definimos su tipado como en Java (String, int, float, etc)
// En typeScript eso se aplica en js
let numero: number = 1;

const nombre: string = "Oscar";

// numero = 'hola'; Esto me tirara error porque le estoy redeclarando un string a una variable de tipado numerico

function saludar(nombre: string) {
  console.log(`Hola ${nombre}, un gusto.`);
}

// saludar(123) // Incorrecto
saludar("Oscar") // Correcto

// Define la estructura y su tipado de un obetjo
interface Persona {
  nombre: string;
  edad: number;
  casado: boolean;
};

const personas: Persona[] = [ // Aca se le indica que la lista personas tendra objetos con nombre de tipo string, edad de tipo numerico y casado de tipo boleano.
  { nombre: 'Oscar', edad: 24, casado: false },
  { nombre: 'Alex', edad: 23, casado: true },
  { nombre: 'Jesus', edad: 22, casado: false },
];
// Esto para la iteracion le hace la vida mas facil al desarrollador en vez de tener que adivinar lo que viene en esa lista.
const personasCasadas = personas.filter(persona => persona.casado === true);
console.log('Personas casadas:', personasCasadas);
personas.filter(p => p.casado === false).map(p => console.log(`Personas no casadas: ${p.nombre}`));
const filtrado = personas.map(persona => persona.nombre)