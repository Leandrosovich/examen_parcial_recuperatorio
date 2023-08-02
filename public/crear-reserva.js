const formCrearReserva = document.querySelector("#formNuevaReserva")

formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const fecha_ticket = document.querySelector('#fecha_ticket').value;
    const fecha_pelicula = document.querySelector('#fecha_pelicula').value;
    const pelicula = document.querySelector('#pelicula').value;
    const butaca = document.querySelector('#butaca').value;
    const sala = document.querySelector('#sala').value;

    const reserva = {
         
        nombre,
        apellido,
        fecha_pelicula,
        fecha_ticket,
        pelicula,
        butaca,
        sala
    }

    const response = await fetch('http://localhost:4000/api', {
        method: 'POST',
        body: JSON.stringify(reserva),
        headers: {
            'Content-Type': 'application/json'         }
    })
    
    const data = await response.json();

    alert(data.message)
    window.location.href = "/"


});
