const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const pacienteSchema = new Schema({
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
    edad: {
        type: Number,
        required: true
    },
    resultadoTest: {
        type: Boolean,
        required: true
    }
});

const Paciente = mongoose.model("Paciente", pacienteSchema);

module.exports = { Paciente };