let detalleData = null;

// ================================
// Cargar datos de detalle desde JSON
// ================================
fetch('../../data/detalle.json')
  .then((res) => res.json())
  .then((data) => {
    detalleData = data.detalle;
  })
  .catch((err) => console.error('Error cargando detalle:', err));

// Escuchar boton -Ver detalle
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.ver-detalle');
  if (!btn) return;

  const card = btn.closest('.card');
  const ciudad = card.querySelector('.clima-ciudad').textContent.trim();

  abrirDetalle(ciudad, card);
});

// ================================
// Función que abre modal con datos de la ciudad
// ================================
function abrirDetalle(nombreCiudad, card) {
  if (!detalleData) return;

  const ciudadDetalle = detalleData.find(
    (c) => c.ciudad.toLowerCase() === nombreCiudad.toLowerCase()
  );

  if (!ciudadDetalle) {
    mostrarModalSinDetalle(nombreCiudad);
    return;
  }

  // Rellenar datos modal
  document.getElementById('detalle-ciudad').textContent = nombreCiudad;
  document.getElementById('detalle-temperatura').textContent =
    card.querySelector('.clima-temperatura').textContent;
  document.getElementById('detalle-sensacion').textContent =
    card.querySelector('.clima-sensacion').textContent;
  document.getElementById('detalle-humedad').textContent =
    card.querySelector('.clima-humedad').textContent;
  document.getElementById('detalle-viento').textContent =
    card.querySelector('.clima-viento').textContent;

  // Limpiar fila semana
  const filaSemana = document.getElementById('detalle-semana');
  filaSemana.innerHTML = '';



// Rellenar fila semana con todos los datos diarios
ciudadDetalle.semana.forEach((dia) => {
  const td = document.createElement('td');
  td.innerHTML = `
    <img src="${dia.icono}" alt="" width="28" class="mb-1"><br>
    <strong>${dia.min}°</strong> / ${dia.max}°<br>
    <small class="text-muted d-block">Sensación: ${dia.sensacion}°</small>
    <small class="text-muted d-block">Humedad: ${dia.humedad}%</small>
    <small class="text-muted d-block">Viento: ${dia.viento} km/h</small>
  `;
  filaSemana.appendChild(td);
});

  // Mostrar modal
  const modal = new bootstrap.Modal(document.getElementById('modalDetalleClima'));
  modal.show();
}

// ================================
// Función para mostrar modal cuando no hay datos disponibles
// ================================
function mostrarModalSinDetalle(ciudad) {
  // Título
  document.getElementById("detalle-ciudad").textContent = ciudad;

  // Línea de info (se puede ocultar o limpiar)
  document.getElementById("detalle-temperatura").textContent = "-";
  document.getElementById("detalle-sensacion").textContent = "-";
  document.getElementById("detalle-humedad").textContent = "-";
  document.getElementById("detalle-viento").textContent = "-";

  // Reemplazar el contenido de la tabla por un mensaje
  const filaSemana = document.getElementById("detalle-semana");
  filaSemana.innerHTML = `
    <td colspan="7" class="py-5">
      <p class="mb-2 fw-semibold text-danger">
        No hay pronóstico semanal disponible
      </p>
      <p class="text-muted mb-0">
        La ciudad de <strong>${ciudad}</strong> no tiene datos cargados aún.
      </p>
    </td>
  `;

  // Abrir modal con Bootstrap
  const modal = new bootstrap.Modal(
    document.getElementById("modalDetalleClima")
  );
  modal.show();
}
