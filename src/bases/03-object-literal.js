
//* Object Literal
//* Cualquier objeto tiene un prototype (funciones y métodos).

const persona = {
  nombre: 'Kiki',
  apellido: 'Morgan',
  edad: 14, 
  direccion: {
    calle : 'Evergreen',
    numero: '452',
    colonia: 'High Hills',
  },
};

console.table( persona );

//* Se esta haciendo una referencia al mismo espacio de memoria (referencia),
//* Por lo tanto, se sobre escribe el nombre del primer objeto tambien.
// const persona2 = persona;

// persona2.nombre='Gus';

// console.log(persona)
// console.log(persona2)

//* Para crear un clon es mejor hacer un nuevo objeto y escribir sus propiedades.
//* Usode spread
const persona3 = {...persona};
persona3.nombre='Jiji';

console.log(persona3);
console.log(persona);
