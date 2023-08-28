/******************************************************************************/
/* ---------------------------------- texto --------------------------------- */
/******************************************************************************/

function validarTexto(texto) {
    let regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    return regex.test(texto); 
}

function normalizarTexto(texto) {
    return texto.trim();
}

/******************************************************************************/
/* ---------------------------------- email --------------------------------- */
/******************************************************************************/

function validarEmail(email) {
    let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
}

function normalizarEmail(email) {
    return email.trim();
}

/******************************************************************************/
/* -------------------------------- password -------------------------------- */
/******************************************************************************/

function validarContrasenia(contrasenia) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return regex.test(contrasenia);
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 === contrasenia_2;
}

