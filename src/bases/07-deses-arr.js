//* Desestructuración de arreglos

const personajes = ['Kiki','Jiji','Osono'];
const [, ,p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () =>{
  return ['ABC',123];
};

const [ letas, numeros ] = retornaArreglo();
console.log(letas, numeros);

//Tarea
const userState = (valor) =>{
  return [valor, () => {console.log('Hola mundo')}];
}

const [nombre, setNombre,] = userState('Goku');
console.log(nombre);
setNombre();
