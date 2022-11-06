const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const pacienteSchema = new Schema({
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
    edad: {
        type: Number,
        required: false
    },
    resultadoTest: {
        type: Boolean,
        required: true
    }
});

const Paciente = mongoose.model("Paciente", pacienteSchema);

module.exports = { Paciente };