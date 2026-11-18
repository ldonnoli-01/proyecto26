function mostrarProductos() {
    let grilla = document.getElementById("grilla");
    grilla.innerHTML = "";
    for(let i = 0; i<productos.length; i++){
        let producto = productos[i];
        grilla.innerHTML +=` 
        <article class="card">
            <img src="${producto.imagen}" alt="${producto.alt}">
            <div class="datos">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <span class="precio">${formatearPrecio(producto.precio)}</span><br>
                <button class="boton" onclick="agregarProducto(${producto.id})">
                    Agregar al carrito <i class="fa-sharp fa-solid fa-cart-plus"></i>
                </button>                    
            </div>
        </article>        
        `;
    };
};

mostrarProductos();
