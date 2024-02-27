//binaria recursiva
function binariaRescursiva(arr, x, inicio, fin) {
  let medio = 0;
  if (fin < inicio) { //el numero no esta en el conjunto de datos
    return -1;
  } else {
    medio = Math.trunc((inicio + fin) / 2); //obtenemos el medio ded nuestro conjunto de datos
    if (x > arr[medio]) { //si nuestro numero es mayor a la mitad del arreglo
      return binariaRescursiva(arr, x, medio + 1, fin); //llamamos a la fn pero actualizamos los valores, haciendo uso de la recursividad
    } else {
      if (x < arr[medio]) {//si nuestro numero es menor a la mitad del arreglo
        return binariaRescursiva(arr, x, inicio, medio - 1); //llamamos a la fn pero actualizamos los valores, haciendo uso de la recursividad
      } else {
        return medio; //si nada se cumple estoy en el numero a buscar
      }
    }
  }
}

let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
    141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
    191, 192, 193, 194, 195, 196, 197, 198, 199, 200
]; //conjunto de datos, pueden ser modificados pero siempre trendran que estar en orden asc
let x = 11; //numero a buscar en el arreglo de datos
let inicio = 0; //declaramos el inicio de nuestro arreglo
let fin = arr.length - 1; //declaramos el final de nuestro arreglo
console.time("binariaRescursiva"); //funcion para iniciar un temporizador de la ejecucion (van a poder ver cuanto tarda)
console.log(binariaRescursiva(arr, x, inicio, fin)); //llamado a la fn busqueda binaria recusriva que recibe el conjunto de datos, el numero a buscar, el inicio y el final
console.timeEnd("binariaRescursiva"); //imprimimos  el tiempo que tomo la busqueda binaria recursiva


//si tenes alguna duda subi un video a youtube donde explico detalladamente el uso de este algoritmo
//link al video https://www.youtube.com/watch?v=oxnQJUJwTrk&t=14s :)