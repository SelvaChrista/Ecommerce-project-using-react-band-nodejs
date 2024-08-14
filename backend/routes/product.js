const express = require('express');
const { getProducts, getSigleProducts } = require('../controllers/productController');

const router = express.Router();
router.route('/products').get(getProducts);
router.route('/products/:id').get(getSigleProducts);




module.exports = router;