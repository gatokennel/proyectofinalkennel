const express = require('express');
const { obtenerMedico, cargarMedico, obtenerMedicosPorId, editarMedico, eliminarMedico } = require('../controllers/medicosController');

const router = express.Router();

const { check } = require("express-validator");
const { validarId } = require('../middlewares/validarId');
const { validarIdMedico } = require('../middlewares/validarIdMedico');

/* GET users listing. */
router.get('/lista', obtenerMedico );
router.get("/id/:id([0-9a-fA-F]{24})", validarIdMedico, obtenerMedicosPorId);




//Posts
router.post(
    "/crear",
    [
        check("matricula")
        .not()
        .isEmpty()
        .withMessage("El numero de matricula debe cargarse")
        .isNumeric()
        .withMessage("La matricula debe ser numérica"),
      check("dni")
        .not()
        .isEmpty()
        .withMessage("El dni debe cargarse")
        .isNumeric()
        .withMessage("El dni debe ser numérico"),
      check("nombre").not().isEmpty().withMessage("Cargar el primer nombre"),
      check("apellido").not().isEmpty().withMessage("Cargar el apellido completo"),
      check("especialidad").not().isEmpty().withMessage("Cargar la especialidad completa"),
      check("edad")
        .isNumeric()
        .withMessage("Indique la edad del doctor")
        .isLength({ min: 1, max: 150 })
        .withMessage("La edad ingresada debe ser mayor a 0"),
    ],
    cargarMedico
  );

//Put
  router.put(
    "/editar/:id",
    validarId,
    [
        check("matricula")
        .not()
        .isEmpty()
        .withMessage("El numero de matricula debe cargarse")
        .isNumeric()
        .withMessage("La matricula debe ser numérica"),
      check("dni")
        .not()
        .isEmpty()
        .withMessage("El dni debe cargarse")
        .isNumeric()
        .withMessage("El dni debe ser numérico"),
      check("nombre").not().isEmpty().withMessage("Cargar el primer nombre"),
      check("apellido").not().isEmpty().withMessage("Cargar el apellido completo"),
      check("especialidad").not().isEmpty().withMessage("Cargar la especialidad completa"),
      check("edad")
        .isNumeric()
        .withMessage("Indique la edad del doctor")
        .isLength({ min: 1, max: 150 })
        .withMessage("La edad ingresada debe ser mayor a 0"),
    ],
    editarMedico,
  );

  //Delete
  router.delete('/eliminar/:id([0-9a-fA-F]{24})', validarId, eliminarMedico )


module.exports = router;