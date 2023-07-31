/**
 * 
 * @param {*} password String con la contraseña a validar
 * @returns retorna un array con los errores encontrados en la contraseña o true si no hay errores
 */

function validator(password) {
    let number = 0;
    let caracterEspecial = 0;
    const errors = [];
    const caracteresEspeciales = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '?'];
    if (password.length <= 16) errors.push("Menos de 16 caracteres");                        //Pass con menos de 16 caracteres
    if (password === password.toUpperCase()) errors.push("Sin minusculas");          //Pass con mayusculas
    if (password === password.toLowerCase())  errors.push("Sin Mayusculas");          //Pass con minusculas
    if ( password.includes(" ") ) errors.push("Con espacios en blanco");                     //Pass con espacios en blanco
    if ( password.includes("0") ) errors.push("Con 0");                     //Pass con 0

    for (let i = 0; i < password.length; i++) {
        if ( caracteresEspeciales.includes(password[i]) ) caracterEspecial+=1;     //Pass con caracteres especiales
        if ( isNaN(password[i]) ) number += 1;                                     //Pass con numeros
        if ( number < 4 && (password.length - 1) === i ) errors.push("No tiene 4 numeros");             //Pass con mas de 4 numeros  
        if ( password[i] === password[i - 1] ) errors.push("Caracteres seguidos");                       //Contiene dos letras/numeros iguales consecutivas
        if ( caracterEspecial < 2 && (password.length - 1) === i ) errors.push("Sin dos caracteres especiales !@#$%ˆ&*-_+=?");   // Pass con mas de 2 caracteres especiales
    }
    return errors.length === 0 ? true : errors;
}

console.log(validator('Abcdefghijklmnñopqrstuvwxyz123456789!@#$%^&*-_+=?')); // true
console.log(validator('aBcdefghijklmnñopqrstuvwxyz12345678*90')); // error
console.log(validator("1 0"));