//* Variables y constantes
//* Se usaran la mayoria de veces en React

const nombre = 'Gus';
const apellido = 'Hernández';

let valorDado = 5;
valorDado = 6;

//console.log(nombre, apellido, valorDado);
//Scoping
if(true){
  const nombre = 'Kiki';
  console.log(nombre);
}
console.log(nombre);