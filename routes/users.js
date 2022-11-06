const express = require('express');
const { obtenerRecurso } = require('../controllers/pacienteController');
const router = express.Router();

/* GET users listing. */
router.get('/', obtenerRecurso );



module.exports = router;
