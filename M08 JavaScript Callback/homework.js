/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre[0].toUpperCase() + nombre.slice(1);

}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes retornar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var res = cb(num1, num2);
   return res;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes retornar nada.
   // Tu código:
   
   // Opcion 1
   /* let suma = 0;
   for (let i = 0; i < arrayOfNumbers.length; i++) {
      suma += arrayOfNumbers[i]
   }
   cb(suma); */

   // Opcion 2
   let sum = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0)
   cb(sum);

}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   
   // Opcion 1
   /* for (let i = 0; i < array.length; i++) {
      cb(array[i]);
      
   } */

   // Opcion 2
   array.forEach((elemento) => cb(elemento));
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   
   // Opcion 1
   /* var newArray = [];
   for (let i = 0; i < array.length; i++) {
      newArray.push(cb(array[i]));
      
   }
   return newArray; */

   // Opcion 2
   /* var newArray = [];
   array.forEach((elemento) => {
      newArray.push(cb(elemento));
   });
   return newArray; */

   // Opcion 3
   var newArray = array.map((elemento) => cb(elemento));
   return newArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   /* var newArray = [];
   arrayOfStrings.forEach((elemento) => {
      if (elemento[0] === "a") {
         newArray.push(elemento);
      }
   })
   return newArray; */
   
   var newArray = arrayOfStrings.filter((elemento) => elemento[0] === "a")
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
