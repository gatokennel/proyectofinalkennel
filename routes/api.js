const express = require('express');
const router = express.Router();
const { consultaCovid } = require('../controllers/apiController')



/* GET users listing. */
router.get('/lista', consultaCovid )




module.exports = router;