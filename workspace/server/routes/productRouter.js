var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");



router.get('/getAll', productController.getAllProduct);
router.post('/add', productController.newProduct);


module.exports = router;