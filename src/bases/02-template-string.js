//* Template strings

const nombre = 'Gus';
const apellido = 'Hernández';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `Hola, mi nombre es ${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre){
  return `hola ${nombre}`;
}

console.log(`Usando función: ${getSaludo(nombre)}`);