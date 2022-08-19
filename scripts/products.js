//inicializo la variable carrito con una funcion para que detecte si existen valores en el storage
let carrito = cargarCarrito();
window.addEventListener('load', calcularTotalCarrito);

//Inicializo las variables del HTML
let sectionProductos = document.getElementById("section-productos");
let sectionCarrito = document.getElementById("section-carrito");

//Creo los productos con DOM
let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h3>Total: $</h3>";
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h3");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadProductos = document.createElement("div");
cantidadProductos.innerHTML = "<h3>Cantidad de productos: </h3>";
sectionCarrito.appendChild(cantidadProductos);

let cantProductos = document.createElement("h3");
cantProductos.innerText = "0";
cantidadProductos.appendChild(cantProductos);

let botonFinalizar = document.createElement("p");
botonFinalizar.innerHTML = `<button id= "btnFinalizar" >Finalizar compra</button>`;
sectionCarrito.appendChild(botonFinalizar);
botonFinalizar.setAttribute("class", "boton");

//Vacío el carrito al finalizar la compra
botonFinalizar.onclick = () => { vaciarCarrito() };

// Productos que se muestran en cards
const lista = document.querySelector('#section-productos')

fetch('/data.json')
  .then((res) => res.json())
  .then((data) => {

    data.forEach((productos) => {
      const div = document.createElement('div')
      div.innerHTML = ` <div class="img-container">
            <img src="${productos.foto}" alt="${productos.nombre}" class="img-product"/>
            </div>
            <div class="info-producto">
            <p class="font">${productos.nombre}</p>
            <strong class="font">$${productos.precio}</strong>
            <button class="boton" id="btn${productos.id}"> Agregar al carrito </button>
            </div>`

      lista.append(div)
    })
  })

//Evento para que los productos se agreguen al carrito al hacer click en el boton
document.getElementById(`btn${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);


//Funciones
function agregarAlCarrito(id) {
  carrito.push(productos.find(p => p.id == id));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  calcularTotalCarrito();
}

function calcularTotalCarrito() {
  let total = 0;
  for (const producto of carrito) {
    total += producto.precio;
  }
  montoTotalCompra.innerText = total;
  cantProductos.innerText = carrito.length;
}

function vaciarCarrito() {
  montoTotalCompra.innerText = "0";
  cantProductos.innerText = "0";
  localStorage.clear();
  carrito = [];
}

function cargarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  if (carrito == null) {
    return [];
  } else {
    return carrito;
  }
}

//Incorporando la librería Sweet Alert
let btnSA = document.getElementById('btnFinalizar');

btnSA.addEventListener('click', () => {
  Swal.fire({
    title: '¡Gracias por tu compra!',
    text: 'Continua navegando por nuestra web.',
    icon: 'success',
    confirmButtonText: 'Aceptar',
  })
});
