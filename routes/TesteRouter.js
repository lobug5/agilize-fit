/** Referencias */
let express = require('express');
let router = express.Router();
let controller = require('../controllers/TesteController');
let auth = require('../config/AuthJwt')();

/** 
 * Rotas Vinculadas aos seus repectivos metodos no controller
 */
router.post("/",auth.authenticate(),controller.post);
router.put("/:id",auth.authenticate(),controller.put);
router.delete("/:id",auth.authenticate(),controller.delete);
router.get("/",auth.authenticate(),controller.get);

module.exports = router;