const { Router } = require("express");
const router = Router();

const {
  renderListaReservas,
  renderFormNuevaReserva,
  renderFormEditarReserva,
  obtenerReservas, // Obtener todas
  obtenerReserva, // Obtener un única reserva
  crearReserva, // Crear una nueva
  actualizarReserva,
  eliminarReserva, // eliminacion logica, 1 to 0
} = require("../controllers/reserva.controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/listado-reservas", renderListaReservas);

// Formulario para crear una reserva
router.get("/crear-reserva", renderFormNuevaReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("/api", obtenerReservas);

// Crear una reserva
router.post("/api", crearReserva);

router.get("/api/:id", obtenerReserva);

// Actualizar una reserva
router.put("/api/:id", actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/:id", eliminarReserva);

// Formulario para actualizar una reserva
router.get("/actualizar-reserva/:id", renderFormEditarReserva);
module.exports = router;