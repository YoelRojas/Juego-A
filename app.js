let numeroSecreto =  0;  
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario === numeroSecreto){//compara el numero secreto y usuario de forma booleana (tambien tipo de dato)
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1)? 'vez' : 'veces' }`); //mostrar con operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled'); // desactivar el disabled
    } else{
        //el usuario no acerto
        if (numeroUsuario>numeroSecreto) {
            asignarTextoElemento('p',`El numero secreto es  menor`);
        }else{
            asignarTextoElemento('p','El numero secreto es  mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
   let valorCaja =  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todo los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        //Si el numero generaod esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto =  generarNumeroSecreto ();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton 
    document.querySelector('#reiniciar').setAttribute('disabled','true');;
}

condicionesIniciales();