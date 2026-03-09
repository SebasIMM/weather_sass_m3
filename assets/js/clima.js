document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("clima-contenedor");
  const plantilla = document.getElementById("clima-plantilla");

  fetch("../../data/clima.json")
    .then(response => response.json())
    .then(datos => {
      datos.ciudades.forEach(clima => {
        const clone = plantilla.content.cloneNode(true);

        clone.querySelector(".clima-ciudad").textContent = clima.ciudad;
        clone.querySelector(".clima-descripcion").textContent = clima.descripcion;
        clone.querySelector(".clima-temperatura").textContent = clima.temperatura;
        clone.querySelector(".clima-sensacion").textContent = clima.sensacion;
        clone.querySelector(".clima-humedad").textContent = clima.humedad;
        clone.querySelector(".clima-viento").textContent = clima.viento;
        clone.querySelector(".clima-actualizado").textContent = clima.actualizado;

        const icono = clone.querySelector(".clima-icono");
        icono.src = clima.icono;
        icono.alt = clima.descripcion;

        contenedor.appendChild(clone);
      });
    })
    .catch(error => {
      console.error("(Capa 8)Error cargando los datos:", error);
    });
});
