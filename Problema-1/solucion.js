/**
 * Se multiplica por 1000000 para evitar problemas con los decimales
 * @param {*} a Numero a multiplicar por 1000000
 * @returns numero multiplicado por 1000000
 */

function multiplicarPor1000000(a) {
    let resultado = 0;
    for (let i = 0; i < 1000000; i++) {
        resultado += a;
    }
    return resultado;
}

/**
 * 
 * @param {*} a Numero a multiplicar
 * @param {*} b Numero a multiplicar
 * return a * b sin usar el simbolo de multiplicacion
 */

function multiplicarSinSimbolo(a, b) {
    const factorEscalado = multiplicarPor1000000(1000000);
    const esNegativo = (a < 0 && b > 0) || (a > 0 && b < 0);
    const aEntero = Math.abs(multiplicarPor1000000(a));
    const bEntero = Math.abs(multiplicarPor1000000(b));

    let resultado = 0;
    for (let i = 0; i < bEntero; i++)
        resultado += aEntero;
    const resultadoDecimal = resultado / factorEscalado;
    if (esNegativo) 
        return -parseFloat(resultadoDecimal).toFixed(5);
    
    return parseFloat(resultadoDecimal.toFixed(5));
}

const a = 3;
const b = 2;

console.log("Numeros positivos");
console.log(multiplicarSinSimbolo(a, b), `Resultado esperado: ${a * b}`);
console.log("Numeros negativos");
console.log(multiplicarSinSimbolo(-a, -b), `Resultado esperado: ${(-a) * (-b)}`);
console.log("Numeros positivos y negativos");
console.log(multiplicarSinSimbolo(a, -b), `Resultado esperado: ${a * (-b)}`);
console.log("Numeros negativos y positivos");
console.log(multiplicarSinSimbolo(-a, b), `Resultado esperado: ${(-a) * b}`);
console.log("Numeros con coma");
console.log(multiplicarSinSimbolo(a / 10, b / 15), `Resultado esperado: ${a / 10 * b / 15}`);
console.log("Numeros con coma y negativos");
console.log(multiplicarSinSimbolo(-a / 10, -b / 15), `Resultado esperado: ${(-a / 10) * (-b / 15)}`);
console.log("Numeros con coma y positivos y negativos");
console.log(multiplicarSinSimbolo(a / 10, -b / 15), `Resultado esperado: ${a / 10 * (-b / 15)}`);