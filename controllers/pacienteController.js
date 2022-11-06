const { Paciente } = require("../models/paciente.js")
const {validationResult} = require("express-validator")

const obtenerRecurso = function (req, res, next) {
    res.send('respond with a resource');
};

//obtener

const obtenerPaciente = async (req, res) =>{
    try{
    const pacientes = await Paciente.find();
    res.json({pacientes});
} catch(error){
    console.log(error.message);
}
};

const obtenerPacientePorId = async (req,res) =>{
    const paciente = await Paciente.findById(req.params.id);
    res.status(200).sjon({paciente})
}

//cargar

const cargarPaciente = async (req, res)=>{
  try {
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.status(201).json({
      msg: "Los datos del paciente han sido guardado exitosamente en la base de datos.",
      paciente: paciente,
    });
  } catch (error) {
    console.log(error.message);
  }
};


//editar

const editarPaciente = async (req, res) => {
    try {
      const error = validationResult(req);
      if (error.isEmpty()) {
        await Paciente.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({ msg: "La información del paciente ha sido actualizada" });
      } else {
        res.status(501).json({ msg: error }); 
      }
    } catch (error) {
      console.log(error.message); 
    }
  };

  //eliminar

  const eliminarPaciente = async (req, res) => {
    try {
      const paciente = await Paciente.findByIdAndDelete(req.params.id);
      res.json({ msg: 'Los datos del paciente han sido eliminado', paciente });
    } catch (error) {
      console.log(error.message);
    }
  };

  

module.exports = { obtenerRecurso, obtenerPaciente, cargarPaciente, obtenerPacientePorId, editarPaciente, eliminarPaciente }