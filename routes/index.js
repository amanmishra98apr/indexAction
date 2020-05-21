var express = require('express');
var router = express.Router();
var indexActionController = require("../controller/indexActionController")

/* post  users listing. */
router.post('/', indexActionController.indexAct);

module.exports = router;
