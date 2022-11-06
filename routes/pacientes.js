const express = require('express');
const { obtenerPaciente, cargarPaciente, obtenerPacientePorId, editarPaciente, eliminarPaciente } = require('../controllers/pacienteController');

const router = express.Router();

const { check } = require("express-validator");
const { validarId } = require('../middlewares/validarId');

/* GET users listing. */
router.get('/lista', obtenerPaciente );
router.get("/id/:id([0-9a-fA-F]{24})", validarId, obtenerPacientePorId);




//Posts
router.post(
    "/crear",
    [
      check("dni")
        .not()
        .isEmpty()
        .withMessage("El dni debe cargarse")
        .isNumeric()
        .withMessage("El dni debe ser numérico"),
      check("nombre").not().isEmpty().withMessage("Cargar el primer nombre"),
      check("apellido").not().isEmpty().withMessage("Cargar el apellido completo"),
      check("edad")
        .isNumeric()
        .withMessage("Indique la edad del paciente")
        .isLength({ min: 1, max: 150 })
        .withMessage("La edad ingresada debe ser mayor a 0"),
      check("resultadoTest").not().isEmpty().isBoolean().withMessage("Indique si es true para POSITIVO y false para NEGATIVO"),
    ],
    cargarPaciente
  );

//Put
  router.put(
    "/editar/:id",
    validarId,
    [
      check("dni")
        .not()
        .isEmpty()
        .withMessage("El dni debe cargarse")
        .isNumeric()
        .withMessage("El dni debe ser numérico"),
      check("nombre").not().isEmpty().withMessage("Cargar el primer nombre"),
      check("apellido").not().isEmpty().withMessage("Cargar el apellido completo"),
      check("edad")
        .isNumeric()
        .withMessage("Indique la edad del paciente")
        .isLength({ min: 1, max: 150 })
        .withMessage("La edad ingresada debe ser mayor a 0"),
        check("resultadoTest").not().isEmpty().isBoolean().withMessage("Indique si es true para POSITIVO y false para NEGATIVO"),
    ],
    editarPaciente,
  );

  //Delete
  router.delete('/eliminar/:id([0-9a-fA-F]{24})', validarId, eliminarPaciente )


module.exports = router;