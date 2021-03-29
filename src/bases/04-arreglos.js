
//* Areglos

//No recomendada
// const arreglo = new Array();

//Recomendada
const arreglo = [1,2,3,4];

//No se recomienda Push(), se recomienda inicializar el arreglo.
// arreglo.push(1);

let arreglo2 = [...arreglo, 5];

//* Uso de Map
//* Utiliza callbacks (función que se ejecuta en el método).
const arreglo3 = arreglo2.map( function(numero){
  return numero * 2;
} ); 

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);