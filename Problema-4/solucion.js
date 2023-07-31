/**
 * 
 * @param {*} arrayNumeros array de numeros
 * @returns {void} no retorna nada, imprime los datos por consola
 */

function extraerDatos(arrayNumeros){
    const max = Math.max(...arrayNumeros);
    const min = Math.min(...arrayNumeros);
    console.log("Cantidad de elementos del arreglo: " + arrayNumeros.length);
    const porcentajeDePares = (arrayNumeros.filter(numero => numero % 2 === 0).length * 100) / arrayNumeros.length;
    console.log("Porcentaje de numeros pares: " + parseFloat(porcentajeDePares).toFixed(2) + "%");
    console.log("Porcentaje de numeros impares: " + parseFloat(100 - porcentajeDePares).toFixed(2) + "%");
    console.log("Numero mayor: " + max);
    console.log("Numero menor: " + min);
    console.log("Promedio de todos los numeros: " + arrayNumeros.reduce((a, b) => Math.abs(a) + Math.abs(b), 0) / arrayNumeros.length);
    console.log("Promedio del numero minimo: ", parseFloat(Math.abs(min / max) * 100).toFixed(2),"%");
}

extraerDatos([1,2,3,4,50,6,7,8,-9,10,11,12,13,-14,15]);