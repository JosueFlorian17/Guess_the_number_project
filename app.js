//Creando el numero random
let numerosecreto = Math.floor(Math.random()*100)+1;
console.log(numerosecreto);

//Lista de números random pasados (para que no se repita)

let numerosPasados = [];

let intento = document.getElementById("intento");

let numero_de_intentos = 0;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML  = texto;
}

asignarTextoElemento("h1", "Juego del Número Secreto");
asignarTextoElemento("p", "Adivina el número secreto. Pista: es un número entre 1 y 100");



function intentar(){

    console.log(intento.value);
    if (numerosecreto==intento.value){

        alert("felicitaciones, adivinaste el número secreto");
        numero_de_intentos++;
        alert("El número de intentos fue: "+numero_de_intentos);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else if(intento.value<numerosecreto){
        alert("intenta de nuevo, el numero secreto es mayor");
        numero_de_intentos++;
        limpiarCaja();
    }
    else if (intento.value>numerosecreto){
        alert("intenta de nuevo, el numero secreto es menor");  
        numero_de_intentos++;
        limpiarCaja();  
    }else{
        alert("ingresa un número válido");
        limpiarCaja();  
    }
}


function alertFunction(){
    numerosPasados.push(numerosecreto);
    console.log(numerosPasados);
    console.log("Estarás reiniciando la partida");
    numerosecreto = noRepetirRandomNumber();
    intento.value = "";
    numero_de_intentos = 0;
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function noRepetirRandomNumber(){
    let nuevoNumero = Math.floor(Math.random()*100)+1;
    if (numerosPasados.includes(nuevoNumero)){
        console.log("el número ya fue usado");
        return noRepetirRandomNumber();
    }else{
        console.log("el número no fue usado");
        return nuevoNumero;
    }
}


function limpiarCaja(){
    intento.value = "";
    console.log("limpiando caja de texto");
}



