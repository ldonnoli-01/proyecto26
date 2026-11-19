// desplegable con lista de ciudades

const texto = `Ciudad Autónoma de Buenos Aires
Córdoba
Corrientes
Formosa
La Plata
La Rioja
Mendoza
Neuquén
Paraná
Posadas
Rawson
Resistencia
Río Gallegos
Salta
San Fernando del Valle de Catamarca
San Juan
San Luis
San Miguel de Tucumán
San Salvador de Jujuy
Santa Fe
Santa Rosa
Santiago del Estero
Ushuaia
Viedma`;

const ciudades = texto.split(/\r?\n/);

const desplegable1 = document.getElementById("desplegable1");
ciudades.forEach(ciudad => {
    const nuevaOpcion = document.createElement("div");
    nuevaOpcion.innerHTML = `
        <option value="${ciudad}">${ciudad}</option>
        `
    desplegable1.appendChild(nuevaOpcion);
});
const desplegable2 = document.getElementById("desplegable2");
ciudades.forEach(ciudad => {
    const nuevaOpcion = document.createElement("div");
    nuevaOpcion.innerHTML = `
        <option value="${ciudad}">${ciudad}</option>
        `
    desplegable2.appendChild(nuevaOpcion);
});


