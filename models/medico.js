const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const medicoSchema = new Schema({
    matricula: {
        type: Number,
        required: true,
        unique: true
    },
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true,
    },
});

const Medico = mongoose.model("Medico", medicoSchema);

module.exports = { Medico };