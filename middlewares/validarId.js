const { Paciente } = require("../models/paciente.js");

const validarId = async (req, res, next) => {
  const item = await Paciente.findById(req.params.id);
  if (item !== null) {
    next();
  } else {
    res.status(500).json({ msg: "ID no encontrado..." });
  }
};

module.exports = { validarId };

