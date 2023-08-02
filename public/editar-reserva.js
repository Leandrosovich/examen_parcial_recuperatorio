const formReserva = document.querySelector("#formNuevaReserva");
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector('#nombre').value;
const apellido = document.querySelector('#apellido').value;
const fecha_ticket = document.querySelector('#fecha_ticket').value;
const fecha_pelicula = document.querySelector('#fecha_pelicula').value;
const pelicula = document.querySelector('#pelicula').value;
const butaca = document.querySelector('#butaca').value;
const sala = document.querySelector('#sala').value;

document.addEventListener("DOMContentLoaded", async () => {
  
  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_pelicula.value = data.fecha_pelicula;
  fecha_ticket.value = data.fecha_ticket;
  pelicula.value = data.pelicula;
  butaca.value = data.butaca;
  sala.value = data.sala;
});

formReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_ticket: fecha_ticket.value,
    fecha_pelicula: fecha_pelicula.value,
    pelicula: pelicula.value,
    butaca: butaca.value,
    sala: sala.value,
  };

  // Se envían los nuevos datos al servidor express
  const response = await fetch(`/api/'${reservaId}`, {
    method: "PUT",
    body: JSON.stringify(reservaActualizada),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  alert(data.message);

  // Redireccionar al usuario
  window.location.href = "/";

  const respToJson = await response.json();

  if (response.status !== 200) {
    return Swal.fire({
      title: "Error",
      text: respToJson.message,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }

  // Mostrar mensajes al usuario
  Swal.fire({
    title: "Reserva actualizada",
    text: respToJson.message,
    icon: "success",
    confirmButtonText: "Aceptar",
  });

  setTimeout(() => {
    // Redireccionar al usuario
    window.location.href = "/";
  }, 2000);
});
