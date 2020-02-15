/** Referencias */
let express = require('express');
let router = express.Router();
let user_controller = require('../controllers/UsersController');
let auth = require('../config/AuthJwt')();

/** 
 * Rotas Vinculadas aos seus repectivos metodos no controller
 */
router.post("/",user_controller.post);
router.put("/:id",user_controller.put);
router.delete("/:id",user_controller.delete);
router.get("/",user_controller.get);

module.exports = router;