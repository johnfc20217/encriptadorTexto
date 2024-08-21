function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let audio1 = document.getElementById("audio-m");



    let textoCifrado = texto 
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length != 0){
    /*if (texto.length != 0){*/
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muneco.src = "./img/Encriptado.jpg";

    } else {
        muneco.src = "./img/muneco.jpeg";
        audio1.play();
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el txto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (document.getElementById("texto").value.length != 0){
        /*if (texto.length != 0){*/
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
            muneco.src = "./img/desencriptado.jpg";
} else {
    muneco.src = "./img/muneco.jpeg";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el txto que deseas encriptar o desencriptar";
    alert("Debes ingresar algun texto");
    function iniciarSonido(){
        audio.play();
}

}
/*let sound = new Audio("./sound/mision-imposible.mp3");*/
/*playbtn.addEventListener("click"), ()=>{ sound.play()};*/
}

/*
HTML
<div class= "button-container">
    <button id="playbtn">play</button>
    <button id="pausebtn">pause</button>
</div>
*/
/*
let sound = new Audio("./sound/mision-imposible.mp3");
playbtn.addEventListener("click"), ()=>{ sound.play()};

pausebtn.addEventLIstener("click", ()=> { sound.pause();})
*/

/*
JAVASCRIPT
let sound = new Audio("./ruta mp3");
playbtn.addEventListener("click"), ()=>{ sound.play()};

pausebtn.addEventLIstener("click", ()=> { sound.pause();})
 */