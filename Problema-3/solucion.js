/**
 * 
 * @param {*} password String con la contraseña a validar
 * @returns retorna true en caso de que la contraseña sea valida, en caso contrario retorna un string con el error
 */

function validator(password) {
    let number = 0;
    let caracterEspecial = 0;
    const caracteresEspeciales = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '?'];
    if (password.length <= 16) return "Menos de 16 caracteres";                        //Pass con menos de 16 caracteres
    if (password === password.toUpperCase()) return "Sin minusculas";          //Pass con mayusculas
    if (password === password.toLowerCase()) return "Sin Mayusculas";          //Pass con minusculas
    if ( password.includes(" ") ) return "Con espacios en blanco";                     //Pass con espacios en blanco
    if ( password.includes("0") ) return "Con 0";                     //Pass con 0

    for (let i = 0; i < password.length; i++) {
        if ( caracteresEspeciales.includes(password[i]) ) caracterEspecial+=1;     //Pass con caracteres especiales
        if ( isNaN(password[i]) ) number += 1;                                     //Pass con numeros
        if ( number < 4 && (password.length - 1) === i ) return "No tiene 4 numeos";             //Pass con mas de 4 numeros  
        if ( password[i] === password[i - 1] ) return "Caracteres seguidos";                       //Contiene dos letras/numeros iguales consecutivas
        if ( caracterEspecial < 2 && (password.length - 1) === i ) return "Sin dos caracteres especiales !@#$%ˆ&*-_+=?";   // Pass con mas de 2 caracteres especiales
    }
    return true;
}

console.log(validator('Abcdefghijklmnñopqrstuvwxyz123456789!@#$%^&*-_+=?')); // true
console.log(validator('aBcdefghijklmnñopqrstuvwxyz12345678*9')); // false