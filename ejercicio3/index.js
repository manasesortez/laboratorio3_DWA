/**
 * Crear un programa que contenga una matriz de 8x4; un campo de 
 * las 4 columnas será “id”, los demás campos a insertar serán 
 * a opción suya, utilizando el módulo del repositorio npm 
 * “underscore” y la función findWhere hacer cuatro consultas 
 * con la sintaxis correspondiente para mostrar los datos 
 * individualmente.
 * */
const { findWhere, reduce, groupBy } = require('underscore');

 var alumnosArrays = [
     {id: 1, codigo: "u20182354", nombre: "Miguel Jose Hernandez", promedio: 8.99},
     {id: 2, codigo: "u20178977", nombre: "Jonathan Steven Romero", promedio: 6.88},
     {id: 3, codigo: "u20182945", nombre: "Maria Paola Rivas", promedio: 9.00},
     {id: 4, codigo: "u20134545", nombre: "Marcos Alexander Gonzales", promedio: 9.34},
     {id: 5, codigo: "u20172221", nombre: "Maria Candida Hernandez", promedio: 5.90},
     {id: 6, codigo: "u20192324", nombre: "Rosa Maria Torres", promedio: 4.90},
     {id: 7, codigo: "u20183421", nombre: "Jose Alexander Argueta", promedio: 10.00},
     {id: 8, codigo: "u20202112", nombre: "Hector Manuel Villatoro", promedio: 9.98}
 ];

 //Buscr alumnos por el codigo
 const res = findWhere(alumnosArrays, {codigo: "u20178977"});

 //Buscar alumnos por el id
 const res2 = findWhere(alumnosArrays, {id: 7});

 //Buscar alumnos por el promedio
 const res3 = findWhere(alumnosArrays, {promedio: 5.90});

 //Buscar alumnos por el nombre
 const res4 = findWhere(alumnosArrays, {nombre: "Hector Manuel Villatoro"});

 //console.dir(alumnosArrays);

 /**
  * en este laboratorio vamos a explicar como funciona la funcion 
  * groupBy() de la libreria underscore como lo vemos a continuacion
  */

const arr = [1.3, 2.1, 1.5, 2.8, 3.90, 4]; // en este caso tenemos una lista  de numero que puede ser agrupado por su digito

const groupByNumer = groupBy(arr, (num) => Math.floor(num))

console.dir(groupByNumer)
