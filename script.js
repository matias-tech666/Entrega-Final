function validarFormulario() {

let nombre = document.getElementById("nombre").value.trim();
let apellido = document.getElementById("apellido").value.trim();
let email = document.getElementById("email").value.trim();
let fecha = document.getElementById("fecha").value.trim();
let info = document.getElementById("info").value.trim();
let mensajes = document.getElementById("mensajes");

mensajes.innerHTML = "";
mensajes.style.color = "#e33333";


if (nombre.length < 2) {
mensajes.textContent = "El nombre debe tener al menos 2 caracteres.";
return;
}


if (apellido.length < 3) {
mensajes.textContent = "El apellido debe tener al menos 3 caracteres.";
return;
}


let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!regexEmail.test(email)) {
mensajes.textContent = "Ingresá un email válido.";
return;
}


if (fecha === "") {
mensajes.textContent = "Seleccioná una fecha de nacimiento.";
return;
}


if (info.length < 10) {
mensajes.textContent = "La información adicional debe tener al menos 10 caracteres.";
return;
}

mensajes.style.color = "green";
mensajes.textContent = "Envío exitoso";
}

function validarLogin() {
    let user = document.getElementById("userLogin").value.trim();
    let pass = document.getElementById("passLogin").value.trim();
    let msg = document.getElementById("msgLogin");

    msg.innerHTML = "";

    if (user === "" || pass === "") {
        msg.innerHTML = "Debes completar ambos campos.";
        msg.style.color = "red";
        return false;
    }

    if (pass.length < 6) {
        msg.innerHTML = "La contraseña debe tener al menos 6 caracteres.";
        msg.style.color = "red";
        return false;
    }

    msg.innerHTML = "Login exitoso";
    msg.style.color = "green";
    return false;
}
