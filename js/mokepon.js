let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let sectionReiniciar = document.getElementById("REINICIAR")
    sectionReiniciar.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'none'

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById ("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("Seleccionar-mascota")
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge= document.getElementById('hipodoge')
    let inputCapipepo= document.getElementById('capipepo')
    let inputRatigueya= document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'  
    }
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'   
    }
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'  
    }
    else {
        alert('Seleccione una mascota SI O SI')
    }
        
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(1,3)//SE LLAMA A LA FUNCION "ALEATORIO" E INDICA EL NOMBRE DE LA MASCOTA 
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML= 'Hipodoge'
    }
    else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML= 'Capipepo'
    }
    else {       
        spanMascotaEnemigo.innerHTML= 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)//SE LLAMA A LA FUNCION "ALEATORIO" E INDICA EL NOMBRE DEL ATAQUE 
    
    //EN ESTE CONDICIONAL LO QUE HACE ES QUE CUANDO ALEATORIO DE 1 ME SALGA FUEGO, 2 ME SALGA AGUA Y ASI CON EL OTRO ATAQUE
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

  
    combate() //EL ORDEN ES IMPORTANTE, YA QUE LAS FUNCIONES CUANDO SE LLAMAN SE LEEN DE ARRIBA PARA ABAJO
    //POR LO TANTO, COMBATE LA FUNCION DE COMBATE DEBERIA IR ANTES PARA LUEGO TIRAR EL MENSAJE
    crearMensaje()
    
}
function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")


    if (ataqueJugador == ataqueEnemigo) {
        resultado = 'EMPATASTE &#129300;'
    }
    else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || 
        ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ) {
        resultado = 'GANASTE &#128512;'

        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
        resultado = 'PERDISTE &#128557;'

        vidasJugador-- 
        spanVidasJugador.innerHTML = vidasJugador
        
    }
    
    crearMensaje()
    revisarVidas()
    
}

function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("Ganaste el combate, FELICIDADES &#128512; &#128512; &#128512;")
    } else if (vidasJugador == 0){
        crearMensajeFinal ("Perdiste el combate... &#128557; &#128557; &#128557;")
    }
    
}


function crearMensaje(){
    let sectionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataqueJugador')
    let ataqueDelEnemigo = document.getElementById('ataqueEnemigo')

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes .innerHTML = resultado

    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    ataqueDelJugador.innerHTML = '';

    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;
    ataqueDelEnemigo.innerHTML = '';

    /*let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la del enemigo con ' + ataqueEnemigo + ' entonces tú ' + resultado */

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)

    revisarVidas()

}


function crearMensajeFinal(resultFinal){
    let sectionMensajes= document.getElementById('resultado')

    sectionMensajes.innerHTML = resultFinal
  
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("REINICIAR")
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}


//FUNCION PARA ESCOGER UN NUMERO RANDOM DEL 1 AL 3 (FUEGO, AGUA, TIERRA)
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
