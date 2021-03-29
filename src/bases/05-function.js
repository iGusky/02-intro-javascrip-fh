//* Funciones
//*Function Declaration
//* Las functions declaration se pueden sobreescribir accidentalmente.
// function saludar(nombre){
//   return `Hola ${nombre}`;
// }
// saludar = 20;
// console.log(saludar);

//*Function Expression
//* Previenen la sobreescritura.
// const despedirse = function (nombre){
//   return `Adios, ${nombre}`;
// }
// despedirse = 20;
// console.log(despedirse);

//* Arrow Functions
// const miNombre = ( nombre ) =>{
//   return `Mi nombre es ${nombre}`;
// } 
// console.log(miNombre('Gus'));

//Tarea
//Transformar a funcion de flecha, retornar objeto implicito, probarlo.
const getUsuarioActivo = (nombre) => ({
  uid: 'ABC1235',
  username: nombre,
});

const usuarioActivo = getUsuarioActivo('Gustavo');
console.log(usuarioActivo);