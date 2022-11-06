const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const medicoSchema = new Schema({
    matricula: {
        type: Number,
        required: false,
        unique: true
    },
    dni: {
        type: Number,
        required: false,
        unique: true
    },
    nombre: {
        type: String,
        required: false
    },
    apellido: {
        type: String,
        required: false
    },
    especialidad: {
        type: String,
        required: false
    },
    edad: {
        type: Number,
        required: false,
    },
});

const Medico = mongoose.model("Medico", medicoSchema);

module.exports = { Medico };