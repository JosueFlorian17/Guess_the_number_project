//Creando el numero random
let numerosecreto = Math.floor(Math.random() * 100) + 1;
console.log(numerosecreto);

//Lista de números random pasados (para que no se repita)
let numerosPasados = [];

let intento = document.getElementById("intento");

let numero_de_intentos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTextoElemento("h1", "Juego del Número Secreto");
asignarTextoElemento("p", "Adivina el número secreto. Pista: es un número entre 1 y 100");

function showModal(title, message) {
    
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalMessage").textContent = message;

    
    document.getElementById("customAlert").style.display = "flex";

    
    document.getElementById("closeModal").addEventListener("click", closeModal);
}


function closeModal() {
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("closeModal").removeEventListener("click", closeModal);
}

function intentar() {
    console.log(intento.value);
    if (numerosecreto == intento.value) {
        asignarTextoElemento("h1", "Felicidades, has adivinado el número secreto");
        numero_de_intentos++;
        asignarTextoElemento("p", "Número de intentos: " + numero_de_intentos);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled", true);
    } else if (intento.value == "") {
        showModal("Error", "Ingresa un número válido");
    } else if (intento.value < numerosecreto) {
        showModal("Pista", "Intenta de nuevo, el número secreto es mayor");
        numero_de_intentos++;
        limpiarCaja();
    } else if (intento.value > numerosecreto) {
        showModal("Pista", "Intenta de nuevo, el número secreto es menor");
        numero_de_intentos++;
        limpiarCaja();
    } else {
        showModal("Error", "Ingresa un número válido");
        limpiarCaja();
    }
}

function alertFunction() {
    numerosPasados.push(numerosecreto);
    console.log(numerosPasados);
    console.log("Estarás reiniciando la partida");
    numerosecreto = noRepetirRandomNumber();
    intento.value = "";
    numero_de_intentos = 0;
    asignarTextoElemento("h1", "Juego del Número Secreto");
    asignarTextoElemento("p", "Número de intentos: " + numero_de_intentos);
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("intentar").removeAttribute("disabled");
}

function noRepetirRandomNumber() {
    let nuevoNumero = Math.floor(Math.random() * 100) + 1;
    if (numerosPasados.includes(nuevoNumero)) {
        console.log("el número ya fue usado");
        return noRepetirRandomNumber();
    } else {
        console.log("el número no fue usado");
        return nuevoNumero;
    }
}

function limpiarCaja() {
    intento.value = "";
    console.log("limpiando caja de texto");
}
