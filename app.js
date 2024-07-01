let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intento} ${(intento === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        // El usuario no acertó. 
        if (numeroUsuario < numeroSecreto){
            asignarTextoElemento('p','El número secreto es mayor');
        }
        else {
            asignarTextoElemento('p','El número secreto es menor');
        }
        intento++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los número posibles');
    }
    else {
        // si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}
function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}


function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de inicio 
    //Generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
