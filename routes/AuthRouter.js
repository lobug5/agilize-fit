/** Referencias */
let express = require('express');
let router = express.Router();
let controller = require('../controllers/AuthController');
let auth = require('../config/AuthJwt')();

/** 
 * Rotas Vinculadas aos seus repectivos metodos no controller
 */
router.post("/",controller.post);

module.exports = router;