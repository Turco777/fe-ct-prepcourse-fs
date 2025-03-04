/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var Puto = array[array.length-1];
   return Puto
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
  /*  var arrayIncrementado = [];
   for (i=0; i < array.length; i++){
      var elementoUp = array[i] + 1;
      arrayIncrementado.push(elementoUp);
   }
   return arrayIncrementado; */

   var arrayIncrementado = array.map(function (elemento) {
      return elemento + 1;
   }); 
   return arrayIncrementado;

   /* var arrayIncrementado = array.map((elemento) => elemento + 1);
   return arrayIncrementado; */
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   /* // OPCION 1
   var palabraUnida;
   for (var index = 0; index < palabras.length; index++) {
      if (index === 0) {
         palabraUnida = palabras[index];
      } 
      else {palabraUnida = palabraUnida + " " + palabras[index];      
   }
}
   return palabraUnida; */
   // OPCION 2
   return palabras.join(" ");
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento); 
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   /* // OPCION 1 
   let resultado = arrayOfNums.reduce(
      (acumulador, elemento) => acumulador + elemento, 
      0 
   ); 
   return resultado; */ 
      
   // OPCION 2
   let resultado = 0; 
   arrayOfNums.forEach(element => {
      resultado += element;
   });
   return resultado;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   /* // OPCION 1 
   let cantidad = resultadosTest.length;
   let resultado = resultadosTest.reduce((acumulador, elemento) => acumulador + elemento,
   0
   );
   return resultado / cantidad; */

   // OPCION 2
   let notasSumadas = 0;
   let numDeNotas = 0;
   for (let index = 0; index < resultadosTest.length; index++) {
      notasSumadas += resultadosTest[index];
      numDeNotas += 1;
   }
   return notasSumadas/numDeNotas;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   // OPCION 1 
/*    let mayor = 0; 
   arrayOfNums.forEach((element) => {
      if (mayor === 0) mayor = element; 
      if (element > mayor) mayor = element;   
   });
   return mayor;
 */
   // OPCION 2
   let mayor = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > mayor) mayor = arrayOfNums[i];
      
   }
   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) return 0;
   if (arguments.length === 1) return arguments[0];
   let producto = 1;
   for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
      
   }
   return producto;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let resultado = array.filter((element) => element > 18);
   return resultado.length;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
   else return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var str = String(num);
/* // opcion1
   if (str[0] === "9") return true;
   else return false; */

   // opcion2
   return str[0] === "9";  
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código: 
   // opcion 1 
   var primero = array[0];
   for (let index = 1; index < array.length; index++) {
      if (array[index] != primero){
         return false
      };
   }
   return true;
   
   
   /* // opcion 2
   var nuevoSet = new Set(array);
      return nuevoSet.size() === 1;  */
   }


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var res = []; 
   
   for (let i = 0; i < array.length; i++) {
      if (array[i] ==='Enero' ||array[i] ==='Marzo'||array[i] ==='Noviembre') {
      res.push(array[i])
      }
   } 
   
   if (res.length < 3) return "No se encontraron los meses pedidos";
   else return res;
}
      

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   
   let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
   let res = arr.map(function(element) {
      return element * 6;
   })

   return res;
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let arr = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         arr.push(array[i])
      } 
   } 
   return arr; 
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   let i = 1
   let res = []

   while (i <= 10) {
      num += 2
      if(num === i) {
         break;
      }
      res.push(num)
      i++;
   }

   if (i < 10) {
      return "Se interrumpió la ejecución";
   } else {
      return res;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   var i = 0;
   var array = []

   while(i < 10) {
         i++;
         if (i === 5) continue; 
         num += 2
         array.push(num)
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
