// Variable constante, no se puede redeclarar su valor.
const number1 = 0;
// Variable flexible que se puede redeclarar su valor
let number2 = 0;

const lista = [1, 2, 3, 4, 5];

/* El ciclo for tiene 3 argumentos:
 * el primer argumento es para incializar el valor del iterador
 * el segundo argumento es para la condicion del ciclo
 * el tercer argumento es la cantidad que se ira sumando el iterador.
*/
for (let i = 0; i <= lista.length; i++) {
//   console.log(`Valor del iterador ${i}`);
}

if (number1 === number2) {
  console.log(`El valor del number 1 es igual al del number 2`)
}
/* Diferencias entre if y else if:
 * El if siempre va a preguntar la condicion
 * el else if solo te lo va a validar una vez solo si se cumple la condicion.
*/

while (number2 < lista.length) {
//   console.log(`Valor del number 2 ${number2}`);
  number2++;
}