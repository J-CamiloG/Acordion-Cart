let boton = document.querySelector(".main_svg") ;
let svg = document.getElementById("svg");
let parrafo = document.getElementById("carta-respuesta");

boton.addEventListener("click" , respuesta );

function respuesta() {
    parrafo.style.display = "flex";
}
function ocultar() {
    parrafo.style.display = "none";
}
