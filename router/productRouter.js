const router = require('express').Router();

const { createProduct, getAllProducts, getProductById } = require('../controller/productController');

router.post('/createproduct', createProduct);
router.get('/getall', getAllProducts);
router.get('/oneproduct/:id', getProductById);
module.exports = router;
