/* La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

//prueba de cambio
   
const  textArea = document.querySelector(".text-area"); // aquí estamos llamando el campo de entrada de datos (text-area) desde JavaScript.
const mensaje = document.querySelector(".mensaje");
const acentos = /[áéíóúÁÉÍÓÚ]/;


//Esta fn es para que cuando se de click al boton encriptar el texto pase de la caja grande de texto (izq) a la caja de texto pequeño (derecha).
function btnEncriptar(){ 
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
}

// Esta funcion de reemplazo de letras por palabras SUGERIDA POR PROFESORA ALURA
function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    // Esta funcion veirica que el usuario escirba sin acentos.
    if (acentos.test(stringEncriptado)) {
        alert("El texto contiene letras con tilde, lo debe corregir para poder continuar.");
        stringEncriptado = "ERROR" 
    } else (textArea.value = ""); // sirve para que el texto despues de pasarlo hacia el cajón "mensaje"

    for(let i = 0; i < matrizCodigo.length; i++) { // For que recorre una a una las filas de la matriz 

        if(stringEncriptado.includes(matrizCodigo[i][0])){ //if que verifica si las vocales están dentro del texto y al estar, toma la 2da columna de la matriz para reemplazar la vocal de la primera columna de la matriz.
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        } 
    }
    return stringEncriptado;
}   

// Funcion de reemplazo de palabras por letras cuando ya se tiene el texto encriptado
function btnDesencriptar(){ 
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""; // sirve para que el texto despues de pasarlo hacia el cajón "mensaje"
    mensaje.style.backgroundImage = "none"
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) { // For que recorre una a una las filas de la matriz 
        if(stringDesencriptado.includes(matrizCodigo[i][1])){ //if que verifica si las vocales están dentro del texto y al estar, toma la 2da columna de la matriz para reemplazar la vocal de la primera columna de la matriz.
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }     
    }
    return stringDesencriptado; 
}

function btnCopiar(){ 
    navigator.clipboard.writeText(mensaje.value);
    textArea.value = ""; 
}


//Esta Funcion es de reemplazo de letras por palabras
/* function encriptar(stringEncriptado) {
    if(stringEncriptado.includes("a")) {
        stringEncriptado = stringEncriptado.replaceAll("a","ai");
    }   
    if (stringEncriptado.includes("e")) {
        stringEncriptado = stringEncriptado.replaceAll("e","enter");
    }
    if (stringEncriptado.includes("i")) {
        stringEncriptado = stringEncriptado.replaceAll("i","imes");
    } 
    if (stringEncriptado.includes("o")) {
        stringEncriptado = stringEncriptado.replaceAll("o","ober");
    } 
    if (stringEncriptado.includes("u")) {
        stringEncriptado = stringEncriptado.replaceAll("u","ufat");
    } 
    return stringEncriptado;

}; */

        
       

    
    

