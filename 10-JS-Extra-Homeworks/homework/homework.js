// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let p=Object.getOwnPropertyNames(objeto);
  let nuevoArray = [];
  for (let i = 0; i < p.length; i++ ) {
    nuevoArray.push([p[i], objeto[p[i]]]);
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let letrasRepetidas = {};
  for (let i = 0 ; i < string.length; i++) {
    if (Object.keys(letrasRepetidas).includes(string[i])) {
      letrasRepetidas[string[i]] = letrasRepetidas[string[i]] + 1
      continue
    }
    letrasRepetidas[string[i]] = 1
  }
  return letrasRepetidas;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayuscula = "";
  let minuscula = "";
  for (let i = 0; i < s.length; i++) {
    if(s[i] === s[i].toUpperCase()) {
      mayuscula += s[i];
    } else {
      minuscula += s[i];
    }
  }
  return mayuscula.concat("", minuscula); // return mayuscula + minuscula
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const strArray = str.split(' ') //metodo que separa las plaabras
  for ( let i = 0; i < strArray.length; i++) {
    let palabraActual = strArray[i];
    let palabraInveritda = palabraActual.split('').reverse().join('') //reverse invierte, join vuelve a unir
    strArray[i] = palabraInveritda
  }
  return strArray.join(' ');
} 


function capicua(numero){
  //REVISAR ESTE DE NUEVO
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let cadena = numero.toString();
  let cadenaInvertica = "";

  cadenaInvertica = cadena.split("").reverse().join("");
  if(cadena=== cadenaInvertica) {
    return "Es capicua"
  }
  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var salida = ""

  for (var i = 0 ; i < cadena.length; i++) {
    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
      salida = salida + cadena[i];
    }
  }
  return salida;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var ordenado = [];
  ordenado = arr.sort(function (a,b) {return a.length - b.length})  //toma un elemento y lo guarda en a (you) y el otro en b (are). Se restan, si el resto es 0 no las mueve de lugar, si es + como en biutiful y looking, los invierte
  return ordenado
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interseccion = [];

  for (var i = 0; i < arreglo1.length; i++) {
    for ( var x = 0; x < arreglo2.length; x++) {
      if(arreglo1[i] === arreglo2[x]) {
        interseccion.push(arreglo1[i]);
      }
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};