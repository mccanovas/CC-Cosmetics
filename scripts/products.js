//Script para el contador
let btnIncrementar = document.getElementById('incrementar');
let btnDecrementar = document.getElementById('decrementar');
let contador = document.getElementById('contador');
let contadorValue = parseInt(contador.innerText);

function handleContador(e) {
    let btn = e.target;
    let valor = btn.innerText;
    if (valor == '+' && contadorValue <50) {
        contadorValue++;
        contador.innerText = contadorValue;
    } else if (valor == '-' && contadorValue >0) {
        contadorValue--;
        contador.innerText = contadorValue;
    }
}

btnIncrementar.addEventListener('click', handleContador);
btnDecrementar.addEventListener('click', handleContador);

//Declaro el valor del producto
const precioLabial = 1200;

//Script para indicar qué se agrega al carrito

let sumarCarrito = document.getElementById ('btnCarrito');
//Función para el mensaje
function handleBtnCarrito () {
    let mensaje = document.createElement("p");
    mensaje.innerHTML = "Agregaste " + contadorValue + " unidades del labial Matte Red al carrito y abonarás $" + (contadorValue*precioLabial)+" en total."; 
    document.body.append(mensaje);
}
//Llamado a la función
sumarCarrito.addEventListener ('click', handleBtnCarrito);