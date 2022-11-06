const { Medico } = require("../models/medico.js")
const {validationResult} = require("express-validator")


//obtener

const obtenerMedico = async (req, res) =>{
    try{
    const medicos = await Medico.find();
    res.json({medicos});
} catch(error){
    console.log(error.message);
}
};

const obtenerMedicosPorId = async (req,res) =>{
    const medico = await Medico.findById(req.params.id);
    res.status(200).sjon({medico})
}

//cargar

const cargarMedico = async (req, res)=>{
  try {
    const medico = new Medico(req.body);
    await medico.save();
    res.status(201).json({
      msg: "Los datos del profesional medico han sido guardado exitosamente en la base de datos.",
      medico: medico,
    });
  } catch (error) {
    console.log(error.message);
  }
};


//editar

const editarMedico = async (req, res) => {
    try {
      const error = validationResult(req);
      if (error.isEmpty()) {
        await Medico.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({ msg: "La información del profesional medico ha sido actualizada" });
      } else {
        res.status(501).json({ msg: error }); 
      }
    } catch (error) {
      console.log(error.message); 
    }
  };

  //eliminar

  const eliminarMedico = async (req, res) => {
    try {
      const medico = await Medico.findByIdAndDelete(req.params.id);
      res.json({ msg: 'Los datos del profesional medico han sido eliminado', medico });
    } catch (error) {
      console.log(error.message);
    }
  };

  

module.exports = {cargarMedico, obtenerMedico, obtenerMedicosPorId, editarMedico, eliminarMedico }