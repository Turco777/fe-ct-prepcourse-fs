/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array = [];
   for(var clave in objeto) {
      array.push([clave, objeto[clave]]);
   }
   return array;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   // OPCION 1
   var objeto = {}
   var array = string.split('')
   var letrasOrdenadas = array.sort();

   for (let letra of letrasOrdenadas) {
      if(!objeto[letra]) {
         objeto[letra] = 1
      } else {
         objeto[letra] += 1
      }
   }
   return objeto;

   // OPCION 2
   /* 
      var objeto = {};
      for (var i = 0; i < string.length; i++) {
        var letra = string[i];
        if (!objeto[letra]) {
          objeto[letra] = 1;
        } else {
          objeto[letra]++;
        }
      }
      return Object.keys(objeto).sort().reduce(function (acc, letra) {
        acc[letra] = objeto[letra];
        return acc;
      }, {});
    */


// Creamos un objeto vacío objeto donde almacenaremos cada letra y su cantidad de ocurrencias.
// Recorremos el string con un bucle for.
// En cada iteración, obtenemos la letra actual del string y la utilizamos como clave del objeto objeto.
// Si la letra aún no existe como propiedad del objeto, la agregamos con valor 1.
// Si la letra ya existe en el objeto, aumentamos su valor en 1.
// Una vez terminado el bucle, utilizamos Object.keys() para obtener un arreglo con las claves del objeto (las letras).
// Ordenamos el arreglo alfabéticamente con el método sort().
// Utilizamos reduce() para recorrer el arreglo ordenado y crear un nuevo objeto con las letras y sus cantidades de ocurrencias en orden alfabético.
// Devolvemos el nuevo objeto resultante.

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   // OPCION 1
   /* var array = string.split('');
   var may = [];
   var min = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i].toUpperCase()) {
         may.push(array[i]) 
      } else {
         min.push(array[i])
      }
      
   }
   return may.join('') + min.join('') ; */

   // OPCION 2

   var may = ''
   var min = ''
   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         may += string[i];
      } else {
         min += string[i];
      }
      
   }
   return may + min; 
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var inverso = '' 
   var array = frase.split(' ')
   for (let i = 0; i < array.length; i++) {
      if(i != 0) inverso += ' ' + array[i].split('').reverse().join('')
      else inverso += array[i].split('').reverse().join('')
   }
   return inverso;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = numero.toString(); // 559855985
   for (let i = 0; i < num.length / 2; i++) {
      if (num[i] !== num[num.length - 1 - i]) {
         return "No es capicua";
      }  
   }
   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevoString = ''
   for (var letra of string) {
      if ( letra !== "a" && letra !== "b" && letra !== "c") {
         nuevoString += letra;
      } 
   }
   return nuevoString;

   //OPCION 2
   /* var resultado = '';
   for (var i = 0; i < string.length; i++) {
      if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') {
      resultado += string[i];
   }
   }
   return resultado;
   */
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   return arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
   });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var cruce = []
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if(array1[i] === array2[j]) {
            cruce.push(array1[i])
         }
      }
   }
   return cruce;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
