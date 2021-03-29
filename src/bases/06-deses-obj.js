//* Desestructuración
const persona = {
  nombre: 'Kiki',
  edad: 14,
  clave: 'Delivery',
}

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const userContext = ({ nombre, edad, clave, saldo=0}) => {
  // console.log(nombre, edad, saldo);
  return {
    nombreClave: clave,
    numeroEdad: edad,
    latlng:{
      lat:14.21512,
      lng: 151.14125,
    },
  };
};

const {nombreClave, numeroEdad, latlng:{lat, lng}} = userContext(persona);
console.log(nombreClave, numeroEdad);
console.log(lat,);