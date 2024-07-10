
function mostrar(mensaje){
    document.querySelector("#resultado").innerHTML=mensaje;
}

function actualizarPantalla(){ /**limpiar pantalla **/
    
    document.querySelector("#vacio").style.display="none";
    document.querySelector("#imagenSinMensaje").style.display="none";
    document.querySelector("#sinMensaje").style.display="none";
    document.querySelector("#descpripcionSinMensaje").style.display="none";
    document.querySelector("#resultado").style.display="inline-block";
    document.querySelector("#copiar").style.display="inline-block";
    
}
/**guia en la web https://es.stackoverflow.com/questions/510006/m%C3%A9todo-de-encriptado-en-javascript **/
function encriptarMensaje(){
    var mensaje = document.querySelector("#texto").value;
    var secreto="";
/**si mesaje es distinto realizamos and A a la Z and de la a a la u 
 * y pasamos a los casos si mensaje [i] pasa al caso a e i o u
*/
    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(var i=0;i<mensaje.length;i++){
            switch(mensaje[i]){
                case "a":
                    secreto+="ai";
                    break;
                case "e":
                    secreto+="enter";
                    break;
                case "i":
                    secreto+="imes";
                    break;
                case "o":
                    secreto+="ober";
                    break;
                case "u":
                    secreto+="ufat";
                    break;
                default:
                    secreto+=mensaje[i];
            }
        }

        actualizarPantalla();
        mostrar(secreto);
        document.querySelector('#texto').value='';
    }
    // mostramos un alert
    else alert("Por favor, Ingrese un mensaje en minúsculas y sin acentos.");
}

function desencriptarMensaje(){
    var mensaje = document.querySelector("#texto").value;
    var codigos= [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    var letras = ['a','e','i','o','u'];
    
    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(var i=0;i<5;i++){
            mensaje=mensaje.replaceAll(codigos[i], letras[i]);
        }

        actualizarPantalla();
        mostrar(mensaje);
        document.querySelector('#texto').value='';
    }
    
}

function copiarTexto(){
    var texto = document.querySelector("#resultado");
    texto.select();
    texto.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(texto.value);
}
/**encriptar y desencritar */
var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar");

copiar.onclick = copiarTexto;
encriptar.onclick = encriptarMensaje;
desencriptar.onclick = desencriptarMensaje;