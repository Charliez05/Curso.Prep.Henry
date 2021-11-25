// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0]
}

function devolverUltimoElemento(array) {
  return array[array.length -1]
}


function obtenerLargoDelArray(array) {
  return array.length
}


function incrementarPorUno(array) {
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++) {
    nuevoArray[i] = array[i] + 1;
  }
  return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
 array[array.length] = elemento;
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] === elemento ) {
      return true
      }
  }
    return false
}


function agregarNumeros(numeros) {
  var suma = 0;
  for(var i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
    return suma;
  // NO LA ENTIENDO
  //"numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}


function promedioResultadosTest(resultadosTest) {
  return agregarNumeros(resultadosTest) / resultadosTest.length;
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}


function numeroMasGrande(numeros) {
  var maximo = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i];
    }
  }
  return maximo;
  // NO LA ENTIENDO, un poco mas despues
  //"numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}


function multiplicarArgumentos() {
  if(arguments.length < 1) return 0; 
  var total= 1
  for(var i = 0; i < arguments.length; i++){
    total= total * arguments[i];
  }
  return total
}


function cuentoElementos(arreglo){
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 19) {
      contador++
    }
  }
  return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  }
  return 'Es dia Laboral'
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numero = n.toString()
  if(numero.charAt(0) === '9'){
    return true;
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for ( var i = 0 ; i < arreglo.length-1; i++){
    if(arreglo[i] !== arreglo[i + 1])
    return false;
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for (let i = 0; i < array.length; i++){
  if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
    nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3){
    return'No se encontraron los meses pedidos';
  }
  else {
    return nuevoArray;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var nuevoArray = [];
for( let i = 0 ; i < array.length ; i++){
  if (array[i] > 100) {
    nuevoArray.push(array[i]);
  }
}
return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces. - listo
  //Guardar cada nuevo valor en un array. 
  //Devolver el array - listo
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for( var i = 0; i < 10; i++){
    suma = suma + 2;
    if (suma === i) break;
    else {
      array.push(suma);
    }
  }
  if( i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
    return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for( var i = 0; i < 10; i++){
    if (i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
