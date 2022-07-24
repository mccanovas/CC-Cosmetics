//Declaro la clase constructora del objeto Producto.
class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }
    venta(cant_producto) {
        this.stock = this.stock - cantidad;
    }
}

//Inicio arrays para las categorias de los productos.
const labiales = [];
const cremas = [];

//Cargo el stock de productos segun su categoría.
//Labiales
labiales.push(new Producto("Labial Matte rojo", 1, 1200, 50));
labiales.push(new Producto("Labial Matte rosa", 2, 1200, 50));
labiales.push(new Producto("Labial Matte nude", 3, 1200, 50));
//Cremas
cremas.push(new Producto("Crema hidratante de día", 4, 1800, 50));
cremas.push(new Producto("Crema hidratante de noche", 5, 1800, 50));
cremas.push(new Producto("Crema exfoliante - Todas las pieles", 6, 2100, 50));

//Mensaje de bienvenida y detalle de los productos al usuario.
alert("¡Bienvenido/a a CC Cosmetics!")
alert("A continuación se detallan los productos disponibles y sus IDs para que los añadas al carrito.")

for (const labial of labiales) {
    alert("ID (" + labial.id + ") - " + labial.nombre);
}
for (const crema of cremas) {
    alert("ID (" + crema.id + ") - " + crema.nombre);
}

//Solicito al usuario el ID del producto.
let producto_seleccionado = parseInt(prompt("Ingrese el ID del producto para añadirlo al carrito:"));
const compra_labial = labiales.find(labial => labial.id === producto_seleccionado);
const compra_crema = cremas.find(crema => crema.id == producto_seleccionado);

//Si el valor ingresado es menor a 0, mayor a 6 o no es un número, se inicia el bucle hasta que se ingrese un valor correcto.
while(producto_seleccionado <=0 || producto_seleccionado >6 || isNaN(producto_seleccionado)){
    alert("El valor ingresado es incorrecto.")
    producto_seleccionado = parseInt(prompt("Ingrese el ID del producto para añadirlo al carrito:"));
    }

//Solicito al usuario la cantidad a comprar.
let cant_producto = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del producto seleccionado (stock de 50 unidades):"));

//Si el valor ingresado es menor a 0 o no es un número, se inicia el bucle hasta que se ingrese un valor numérico.
while(cant_producto <=0 || cant_producto >50 || isNaN(cant_producto)){
    alert("El valor ingresado es incorrecto.")
    cant_producto = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del producto seleccionado (stock de 50 unidades):"));
    }
//Informo al usuario cuántas unidades comprará.
 alert("Comprarás"+" "+ cant_producto +" "+" unidades.");

//Imprimir zonas de envío.
alert("Las zonas de envío son: CABA, GBA y CBA.");
let zona_envio = prompt("Ingresa la zona de envío:");
let costo_envio;

 //Bucle para validar que la zona ingresada sea correcta.
while (zona_envio != "CABA" && zona_envio != "GBA" && zona_envio != "CBA"){
    alert("No ingresaste una zona válida. Por favor volvé a intentarlo.");
    zona_envio = prompt("Ingresa la zona de envío:");
}

 //Condición para adecuar el valor de costo_envio.
if (zona_envio == "CABA"){
    costo_envio = 1300;
    alert("El costo del envío es $"+costo_envio+".");
} else if (zona_envio == "GBA") {
    costo_envio = 800;
    alert("El costo del envío es $"+costo_envio+".");
}else if(zona_envio =="CBA"){
    costo_envio = 2300;
    alert("El costo del envío es $"+costo_envio+".");
}

//Inicializo la variable para el precio.
let precio_producto;

//Función para calcular el valor total a abonar.
function calcular_precio (precio_producto, cant_producto, costo_envio) {
    return (precio_producto * cant_producto) + costo_envio;
}

//Información sobre el costo total y mensaje de agradecimiento.
if (producto_seleccionado <= 3) {
    let precio_final = calcular_precio(compra_labial.precio, cant_producto, costo_envio);
    alert("El precio total de tu compra + envío es $" + precio_final + ". ¡Muchas gracias, que la disfrutes!");
    compra_labial.venta(cantidad);
} else if (producto_seleccionado <= 6) {
    let precio_final = calcular_precio(compra_crema.precio, cant_producto, costo_envio);
    alert("El precio total de tu compra + envío es $" + precio_final + ". ¡Muchas gracias, que la disfrutes!");
    compra_crema.venta(cantidad);
}