var express = require('express');
var router = express.Router();
var controller = require("../controllers/cliente");

router.get("/list", controller.listUsuarios);

module.exports = router;
