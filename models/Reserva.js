//Modelo de datos de un cine.
const { DataTypes, sequelize } = require("../database");

const Reserva = sequelize.define("Reserva", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo: {
        type: DataTypes.STRING(100),
        allowNule: false,
        unique: true,
        defaultValue: new Date().getTime()
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNule: false,
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNule: false,
    },
    pelicula: {
        type: DataTypes.STRING(100),
        allowNule: false,
    },
    fecha_ticket: {
        type: DataTypes.DATE,
        allowNule: false,
    },
    fecha_pelicula: {
        type: DataTypes.DATE,
        allowNule: false,
    },
    butaca: {
        type: DataTypes.INTEGER,
        allowNule: false,
    },
    sala: {
        type: DataTypes.INTEGER,
        allowNule: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNule: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNule: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNule: true
    }
},  {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: 'reservas'
    });

Reserva.sync({ force: false }).then(() => {
    console.log('Tabla de reserva creada');
});

module.exports = Reserva;