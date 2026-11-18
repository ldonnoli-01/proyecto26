/*
Colección de funciones relacionadas al carrito de compras
que se usan en index.html y carrito.html
El carrito se guarda y se actualiza en localStorage
*/

// Guardar el carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));   // array => texto
    actualizarContador();
}

// Restaurar el carrito guardado, si no hay carrito devuelve un array vacío
function traerCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado === null) {
        return [];
    }
    return JSON.parse(carritoGuardado);     // texto => array
}

// Agregar un producto al carrito usando su id
// - si el producto no estaba en el carrito, lo agrega al final
// - si ya estaba, incremeta la cantidad en 1
function agregarProducto(id) {
    const carrito = traerCarrito();
    const producto = productos.find(function(x) {return x.id === id;}); // busca el producto
    const itemEnCarrito = carrito.find(function(item) {return item.id === id;}); // está en el carrito?
    if (itemEnCarrito) {
        itemEnCarrito.cantidad++ ;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }
    guardarCarrito(carrito);
    Swal.fire({                 // toast (cartelito) que dura 1500 mseg
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Agregaste: " + producto.nombre,
        showConfirmButton: false,
        timer: 1500
    });
}

// Eliminar una unidad de un producto del carrito
function quitarProducto(id) {
    const carrito = traerCarrito();
    const itemEnCarrito = carrito.find(function(x) {return x.id === id;}); // busca el producto
    const cant = itemEnCarrito.cantidad;
    if (cant > 1) {         // si hay mas de 1, decrementa
        itemEnCarrito.cantidad-- ;
    } else {                // si queda 1 solo, elimina el item
        const carritoNuevo = carrito.filter(function (x) {return x.id !== id;});
        guardarCarrito(carritoNuevo);
    }
}

// Vaciar el carrito
function vaciarCarrito() {
    guardarCarrito([]);
}

// Sumar precio x cantidad para todos los productos
function calcularTotal() {
    const carrito = traerCarrito();
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio*carrito[i].cantidad;
    }
    return total;
}

// Contar el total de unidades en el carrito
function contarProductos() {
    const carrito = traerCarrito();
    let n = 0;
    for (let i = 0; i < carrito.length; i++) {
        n += carrito[i].cantidad;
    }
    return n;
}

// Mostrar la cantidad junto al carrito
function actualizarContador() {
    const contador = document.getElementById("contador-carrito");
    contador.textContent = contarProductos();
}

// Formatear precios (123456 => $ 123.456)
function formatearPrecio(numero) {
    return "$ " + numero.toLocaleString("es-AR");
}

// Apenas carga la pagina se actualiza el contador del header
actualizarContador();
